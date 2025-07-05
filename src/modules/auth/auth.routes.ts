import { Router } from "express";
import { AuthUserController } from "./auth-user.controller";

const authRouter = Router();

authRouter.post('/sign-in', new AuthUserController().handle);

export { authRouter }