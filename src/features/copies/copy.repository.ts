import prisma from "../../prisma/client"

import { CreateCopyDTO } from "./schema"

export const createCopy = async (dataCopy: CreateCopyDTO) => {
    const copy = await prisma.copy.create({
        data: {
            code: dataCopy.code,
            status: dataCopy.status,
            bookId: dataCopy.bookId,
        }
    });

    return copy;
};
