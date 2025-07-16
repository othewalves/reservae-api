import { UpdateBookDTO } from "../dto";
import { CreateBookDTO } from "../dto/book/create-book.dto"
import prisma from "../prisma/client"

export const getAllBooks = async () => {
    const books = await prisma.book.findMany();
    return books;
}

export const findBookById = async (id: string) => {
    const book = await prisma.book.findFirst({
        where: {
            id
        }
    });

    return book;
};

export const findBookByTitle = async (title: string) => {
    const bookExists = await prisma.book.findFirst({
        where: {
            title
        }
    });

    return bookExists;
};

export const createBook = async (dataBook: CreateBookDTO) => {
    const book = await prisma.book.create({
        data: {
            title: dataBook.title,
            author: dataBook.author,
            publisher: dataBook.publisher,
            isbn: dataBook.isbn,
            description: dataBook.description,
            cover: dataBook.cover,
            banner: dataBook.banner,
            tags: {
                connect: dataBook.tags.map(id => ({ id })),
            },
        },
        include: {
            tags: {
                select: {
                    id: true,
                    name: true
                }
            },
        },
    });
    return book;
};

export const updateBook = async (dataBook: UpdateBookDTO) => {
    const { id, tags, ...fieldsToUpdate } = dataBook;

    const book = await prisma.book.update({
        where: {
            id: dataBook.id
        },
        data: {
            ...fieldsToUpdate,
            ...(tags && {
                tags: {
                    set: tags.map(tagId => ({ id: tagId })),
                },
            }),
        },
    });

    return book;
};

export const deleteBook = async (id: string) => {
    const book = await prisma.book.delete({
        where: {
            id
        }
    });

    return { message: 'Livro foi excluído' };
}