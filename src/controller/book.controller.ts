import { Request, Response } from "express";
import { BookService } from "../services";
import { handleError } from "../utils/handle-error";
import { CreateBookDTO, createBookSchema } from "../dto/book/create-book.dto";

const bookService = new BookService();
class BookController {
    async create(req: Request, res: Response) {
        try {
            const { user_id } = req;
            const dataBook: CreateBookDTO = createBookSchema.parse(req.body);
            const book = await bookService.create(user_id, dataBook);
            return res.status(200).json(book);
        } catch (error) {
            return handleError(error, res);
        };
    };
};

export { BookController };