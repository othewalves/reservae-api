import { Router } from "express";
import { BookController } from "../controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";

import multer from "multer";
import uploadConfig from '../config/multer';

const bookRouter = Router();
const bookController = new BookController();
const upload = multer(uploadConfig.upload('./tmp'));

bookRouter.get('/', bookController.get.bind(bookController));
bookRouter.post('/create', isAuthenticated, upload.single('file'), bookController.create.bind(bookController));
bookRouter.put('/update', isAuthenticated, upload.single('file'), bookController.update.bind(bookController));

export { bookRouter };