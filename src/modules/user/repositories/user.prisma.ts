
import { IUserRepository } from "./user.repository";
import prisma from "../../../prisma/client";
import { User } from "../dtos/user.dto";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { hash } from "bcryptjs";

class UserPrisma implements IUserRepository {
    async findByEmail(email: string) {
        const user: User = await prisma.user.findFirst({
            where: {
                email
            }
        });
        return user ?? null;
    }

    async createUser(data: CreateUserDTO) {
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
                id: true,
                role: true
            }
        });

        return user;
    }
}

export { UserPrisma };