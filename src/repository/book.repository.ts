import { CreateBookDTO } from "../dto/book/create-book.dto"
import prisma from "../prisma/client"

export const getAllBooks = async () => {
    const books = await prisma.book.findMany();
    return books;
}

export const findBookByTitle = async (title: string) => {
    const bookExists = await prisma.book.findFirst({
        where: {
            title
        }
    });

    return bookExists;
};

export const hasPermission = async (id: string) => {
    const isLibrarian = await prisma.user.findFirst({
        where: {
            id
        }
    });

    return isLibrarian.role === 'BIBLIOTECARIO' ? true : false;
};

export const createBook = async (dataBook: CreateBookDTO) => {
    const book = await prisma.book.create({
        data: {
            title: dataBook.title,
            author: dataBook.author,
            publisher: dataBook.publisher,
            category: dataBook.category,
            isbn: dataBook.isbn,
            description: dataBook.description,
            cover: dataBook.cover,
            banner: dataBook.banner,
        }
    });
    return book;
};