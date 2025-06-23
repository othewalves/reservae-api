import { Router } from "express";
import CreateUserController from './controllers/create-user.controller';

const userRouter = Router();

userRouter.post('/', CreateUserController);

export default userRouter;