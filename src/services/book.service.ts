import { CreateBookDTO } from "../dto/book/create-book.dto";
import { createBook, findBookByTitle, hasPermission } from "../repository/book.repository";
import { ExceptionError } from "../utils/exception-error";

class BookService {
    async create(id: string, dataBook: CreateBookDTO) {

        const isLibrarian = await hasPermission(id);

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
};

export { BookService };