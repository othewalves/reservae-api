import { z } from 'zod';

export const CreateCopySchema = z.object({
    code: z.string().min(1, { message: 'O código da cópia é obrigatório' }),
    status: z.enum(['DISPONIVEL', 'EMPRESTADO', 'RESERVADO', 'DANIFICADO', 'PERDIDO'], {
        message: 'Status inválido',
    }),
    bookId: z.string().uuid({ message: 'ID do livro inválido' }),
});

export type CreateCopyDTO = z.infer<typeof CreateCopySchema>;
