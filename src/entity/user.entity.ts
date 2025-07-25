export type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    role: 'ALUNO' | 'BIBLIOTECARIO' | 'ADMIN';
    createdAt?: Date;
    updatedAt?: Date;
}
