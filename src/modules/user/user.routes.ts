import { Router } from "express";
import { CreateUserController } from "./controllers/index";

const userRouter = Router();

userRouter.post('/sign-up', new CreateUserController().handle);

export { userRouter };