import { compare } from 'bcryptjs';
import prisma from "../../prisma/client";
import { AuthUserDTO } from "../dtos/auth-user.dto";
import { ExceptionError } from "../../utils/exception-error";

import { sign } from 'jsonwebtoken';

class AuthUserService {
    async execute(data: AuthUserDTO) {

        const user = await prisma.user.findFirst({
            where: {
                email: data.email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true
            }
        });


        if (!user) {
            throw new ExceptionError(`E-mail e/ou senha inválidos`, 400, 'email');
        };

        const verifyPassword = await compare(data.password, user?.password)

        if (!verifyPassword) {
            throw new ExceptionError(`E-mail e/ou senha inválidos`, 400, 'email');
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.SECRETE_JWT,
            {
                subject: user.id,
                expiresIn: '30d'
            },
        )

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token: token

        }
    };
};

export { AuthUserService };