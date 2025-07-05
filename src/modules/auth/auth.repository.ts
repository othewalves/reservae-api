import prisma from "../../prisma/client";
import { AuthUserDTO } from "./dtos/auth-user.dto";

export const loginUser = async (data: AuthUserDTO) => {
    const user = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });
    return user;
}