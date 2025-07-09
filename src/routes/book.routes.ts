import { Router } from "express";
import { BookController } from "../controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const bookRouter = Router();
const bookController = new BookController();

bookRouter.post('/create', isAuthenticated, bookController.create.bind(bookController));

export { bookRouter };