import { Copy } from "../../generated/prisma";
import prisma from "../../prisma/client"

import { CreateCopyDTO } from "./schema"

export const listAll = async (code: string) => {
    const copy = await prisma.copy.findMany({
        where: {
            code
        }
    });

    return code;
}

export const findCopyByBookId = async (bookId: string) => {
    const copy = await prisma.copy.findFirst({
        where: {
            bookId: bookId
        }
    });

    return copy;
}

export const createCopy = async (
    bookId, quantity,
    { name, code, status, }: Copy
) => {
    const copy = await prisma.copy.create({
        data: {
            name,
            code: `${code}-${quantity}`,
            status,
            bookId,
        }
    });
    return copy;
};
