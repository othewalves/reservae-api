import { Request, Response } from "express"
import { CreateUserService } from "../services/create-user.service";
import { CreateUserDTO, createUserSchema } from "../dtos/create-user.dto";
import { handleError } from "../../utils/handle-error";

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {

            const userData: CreateUserDTO = createUserSchema.parse(req.body);

            const user = await new CreateUserService().execute(userData);
            return res.status(201).json(user);


        } catch (error) {
            return handleError(error, res);

        };
    };
};

export { CreateUserController };
