import { UpdateBookDTO } from "../dto";
import { CreateBookDTO } from "../dto/book/create-book.dto";
import { createBook, findBookById, findBookByTitle, getAllBooks, updateBook } from "../repository/book.repository";
import { hasPermission } from "../repository/hasPermission.repository";
import { ExceptionError } from "../utils/exception-error";

class BookService {

    async get() {
        const books = await getAllBooks();
        return books;
    }

    async create(user_id: string, dataBook: CreateBookDTO) {

        const isLibrarian = await hasPermission(user_id);

        if (!isLibrarian) {
            return new ExceptionError('Operação inválida', 403, 'user');
        }

        const bookExists = await findBookByTitle(dataBook.title);

        if (bookExists) {
            throw new ExceptionError("Livro já cadastrado", 409, 'book');

        };

        const book = await createBook(dataBook);

        return book;
    };

    async updateBook(user_id: string, dataBook: UpdateBookDTO) {

        const isLibrarian = await hasPermission(user_id);

        if (!isLibrarian) {
            return new ExceptionError('Operação inválida', 403, 'user');
        }

        const bookExists = await findBookById(dataBook.id);

        if (!bookExists) {
            throw new ExceptionError('Não foi possível atualizar o livro', 400, 'book');
        }

        const book = await updateBook(dataBook);
        return book;
    }

};

export { BookService };