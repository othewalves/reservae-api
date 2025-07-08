import { ExceptionError } from "../utils/exception-error";
import { validityCPF } from "../utils/validity-cpf";
import { CreateUserDTO } from "../dto/create.user.dto";
import { UpdateUserDTO } from "../dto/update.user.dto";
import { createUser, findByCPF, findByEmail, findById, updateUser } from "../repository";

class UserService {


    async create(data: CreateUserDTO) {

        const isValidCPF = validityCPF(data.cpf);

        if (!isValidCPF) {
            throw new ExceptionError("CPF inválido", 409, 'cpf');
        }

        const userExists = await findByEmail(data.email);

        if (userExists) {
            throw new ExceptionError("E-mail já cadastrado", 409, 'email');
        };

        const cpfExists = await findByCPF(data.cpf);

        if (cpfExists) {
            throw new ExceptionError("CPF já cadastrado", 409, 'email');
        }

        const newUser = await createUser(data);

        return newUser;
    }

    async getUser(id: string) {
        const user = await findById(id);

        if (!user) {
            throw new ExceptionError("Usuário não encontrado", 404, 'email');
        }

        return user;
    }

    async update(id: string, data: UpdateUserDTO) {
        const userExists = findById(id);

        if (!userExists) {
            throw new ExceptionError('Operação não autorizada', 401, 'id');
        }

        const user = await updateUser(id, data);
        return user;
    }

}
export { UserService }; 