import prisma from "../../../prisma/client";
import { UserLogin } from "../dtos/user-login.dto";
import { IAuthRepository } from "../auth.repository";

class AuthPrisma implements IAuthRepository {
    async isUserRegister(email: string, password: string): Promise<UserLogin | null> {
        const user: UserLogin = await prisma.user.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                role: true
            }
        });
        return user;
    }
}