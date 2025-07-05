export type User = {
    id: string;
    name: string;
    email: string;
    role: 'ALUNO' | 'BIBLIOTECARIO' | 'ADMIN';
    // opcional: createdAt?: Date;
    // opcional: updatedAt?: Date;
}
