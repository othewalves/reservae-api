import { User } from "../dtos/user.dto";
import { CreateUserDTO } from "../dtos/create-user.dto";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    createUser(user: CreateUserDTO): Promise<User>;
};