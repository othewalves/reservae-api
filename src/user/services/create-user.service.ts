import prisma from "../../prisma/client";
import { ExceptionError } from "../../utils/exception-error";
import { CreateUserDTO } from "../dtos/create-user.dto";

export const CreateUserService = async (data: CreateUserDTO) => {

    const userAlreadyExists = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });

    if (userAlreadyExists) {
        throw new ExceptionError('E-mail já cadastrado', 409, 'email')
    }

    const user = await prisma.user.create({ data });
    return user;
}