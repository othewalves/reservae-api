import prisma from "../../prisma/client";
import { ExceptionError } from "../../utils/exception-error";
import { CreateUserDTO } from "../dtos/create-user.dto";

import { hash } from 'bcryptjs';

class CreateUserService {
    async execute(data: CreateUserDTO) {

        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email: data.email
            }
        });

        if (userAlreadyExists) {
            throw new ExceptionError('E-mail já cadastrado', 409, 'email')
        }

        const passwordEncrypted = await hash(data.password, 8);

        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                role: data.role,
                password: passwordEncrypted
            }, select: {
                email: true,
                name: true,
                id: true
            }
        });

        return user;
    };
};

export { CreateUserService }