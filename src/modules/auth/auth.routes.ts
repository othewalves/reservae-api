import { Router } from "express";
import { AuthUserController } from "./controllers";

const authRouter = Router();

authRouter.post('/sign-in', new AuthUserController().handle);

export { authRouter }