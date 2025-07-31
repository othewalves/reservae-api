import { hasPermission } from './../../utils/has-permission';
import { CreateCopyDTO } from "./schema";
import * as repository from './copy.repository';
import { ExceptionError } from "../../utils";
import { Copy } from '../../generated/prisma';
class CopyService {
    async listAll(code: string) {
        const copy = await repository.listAll(code);

        return copy;
    };

    async create(user_id: string, bookId: string, quantity: string) {

        const isLibrarian = hasPermission(user_id);

        if (!isLibrarian) {
            throw new ExceptionError('Operação não autorizada', 403, '');
        };

        const copyExists = await repository.findCopyByBookId(bookId);


        if (!copyExists) {
            console.log('passou aqui?', copyExists)
            throw new ExceptionError('Livro não encontrado', 404, 'book')
        };

        const { code, name, status } = copyExists;

        for (let i = 0; i <= parseInt(quantity); i++) {
            const copies = await repository.createCopy(bookId, quantity, { code, name, status } as Copy);
        };

        return copyExists;
    };

};

export { CopyService };