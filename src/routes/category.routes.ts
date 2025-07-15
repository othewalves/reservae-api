import { Router } from "express";
import { CategoryController } from "../controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post('/create', isAuthenticated, categoryController.createCategory.bind(categoryController));

export { categoryRouter }