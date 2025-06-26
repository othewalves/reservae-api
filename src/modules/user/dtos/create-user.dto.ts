
import { z } from 'zod';

const validRoles = ['ALUNO', 'BIBLIOTECARIO', 'ADMIN'] as const;

export const createUserSchema = z.object({
    name: z.string().min(1, { message: 'O nome é obrigatório' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(6, { message: 'A senha deve ter ao menos 6 caracteres' }),
    role: z.enum(validRoles, {
        errorMap: () => ({ message: 'Tipo de usuário inválido.' })
    }),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
