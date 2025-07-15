import z from 'zod';

export const CreateCategorySchema = z.object({
    name: z.string({
        required_error: 'Categoria é obrigatória',
    }).min(1, 'Categoria é obrigatória'),
});

export type CreateCategoryDTO = z.infer<typeof CreateCategorySchema>;