import prisma from "../../prisma/client";
import { CreateUserDTO } from "../dtos/create-user.dto";

export const CreateUserService = async (data: CreateUserDTO) => {
    const user = await prisma.user.create({ data });
    return user;
}