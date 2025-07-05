import { ExceptionError } from "../../../utils/exception-error";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { User } from "../dtos/user.dto";

import { UserPrisma } from "../repositories/user.prisma";

class CreateUserService {
    constructor(private UserPrisma: UserPrisma) { };
    async execute(data: CreateUserDTO): Promise<User> {

        const userAlreadyExists = await this.UserPrisma.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new ExceptionError('E-mail já cadastrado', 409, 'email')
        }


        const user = await this.UserPrisma.createUser(data)

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        };
    };
};

export { CreateUserService }