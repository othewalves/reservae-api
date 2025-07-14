import { Request, Response } from "express";
import { BookService } from "../services";
import { handleError } from "../utils/handle-error";
import { CreateBookDTO, createBookSchema } from "../dto/book/create-book.dto";

const bookService = new BookService();
class BookController {
    async get(req: Request, res: Response) {
        try {
            const books = await bookService.get();
            return res.status(200).json(books);
        } catch (error) {
            return handleError(error, res);
        }
    };

    async create(req: Request, res: Response) {
        try {
            const { user_id } = req;

            if (!req.file) {
                handleError('error upload file', res)
            } else {
                const { originalname, filename } = req.file;
                const dataBook: CreateBookDTO = createBookSchema.parse(req.body);

                // const book = await bookService.create(user_id, { ...dataBook, cover: filename });

                return res.status(200).json({ originalname, filename });
            }

        } catch (error) {
            return handleError(error, res);
        };
    };
};

export { BookController };