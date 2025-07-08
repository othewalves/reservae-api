import { Router } from "express";
import { UserController } from "./user.controller";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

const userRouter = Router();

const userController = new UserController();

userRouter.get('/details', isAuthenticated, userController.getUser.bind(userController));
userRouter.post('/sign-up', userController.create.bind(userController));
userRouter.put('/edit', isAuthenticated, userController.update.bind(userController));

export { userRouter };