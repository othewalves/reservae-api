import { CreateUserDTO } from "../dtos/create-user.dto";
import { User } from "../dtos/user.dto";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    createUser(user: CreateUserDTO): Promise<CreateUserDTO>;

};