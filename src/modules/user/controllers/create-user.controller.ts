import { Request, Response } from "express"
import { CreateUserService } from "../services/create-user.service";
import { CreateUserDTO, createUserSchema } from "../dtos/create-user.dto";
import { handleError } from "../../../utils/handle-error";
import { UserPrisma } from "../repositories/user.prisma";

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {

            const userData: CreateUserDTO = createUserSchema.parse(req.body);

            const userRepository = new UserPrisma();
            const createUserService = new CreateUserService(userRepository);

            const user = await createUserService.execute(userData);
            return res.status(201).json(user);


        } catch (error) {
            return handleError(error, res);

        };
    };
};

export { CreateUserController };
