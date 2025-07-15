import { z } from 'zod';

export const createBookSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'O título é obrigatório' }),

    author: z
        .string()
        .min(1, { message: 'O autor é obrigatório' }),

    publisher: z
        .string()
        .min(1, { message: 'A editora é obrigatória' }),

    isbn: z
        .string()
        .min(10, { message: 'ISBN deve ter pelo menos 10 caracteres' })
        .max(13, { message: 'ISBN deve ter no máximo 13 caracteres' }),

    description: z
        .string()
        .min(10, { message: 'A descrição deve ter pelo menos 10 caracteres' }),

    category: z
        .string()
        .min(1, { message: 'A categoria é obrigatória' }),

    cover: z
        .string()
        .url({ message: 'A URL da capa é inválida' })
        .optional(),

    banner: z
        .string()
        .url({ message: 'A URL do banner é inválida' })
        .optional(),
    tags: z
        .array(z
            .string()
            .uuid())
        .nonempty('Selecione pelo menos uma categoria'),

});

export type CreateBookDTO = z.infer<typeof createBookSchema>;
