import prisma from "../prisma/client";

export const hasPermission = async (id: string) => {
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
        return false;
    }

    return user.role === 'BIBLIOTECARIO';
};