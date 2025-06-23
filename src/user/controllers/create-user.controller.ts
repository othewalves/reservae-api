import { Request, Response } from "express"
import { CreateUserService } from "../services/create-user.service";
import { CreateUserDTO, createUserSchema } from "../dtos/create-user.dto";

const CreateUserController = async (req: Request, res: Response) => {
    try {

        const userData: CreateUserDTO = createUserSchema.parse(req.body);

        const user = await CreateUserService(userData);
        return res.status(201).json(user);


    } catch (error) {
        if (error instanceof Error && 'errors' in error) {
            return res.status(400).json({ errors: (error as any).errors });
        }
        return res.status(500).json({ error: 'Erro interno do servidor' });
    };
};

export default CreateUserController;
