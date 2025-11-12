import prisma from "../../prisma/client";

import { CreateCategoryDTO } from "./schema";

export const findCategories = async () => {
    const categories = await prisma.category.findMany({});
    return categories;
};

export const findCategoryByName = async (name: string) => {
    const categories = await prisma.category.findFirst({
        where: {
            name
        }
    });

    return categories;
};

export const createCategory = async (dataCategory: CreateCategoryDTO) => {
    const category = await prisma.category.create({
        data: dataCategory
    });

    return category;
}