import { CreateCategoryDTO } from "../dto/category/create-category.dto";
import prisma from "../prisma/client";

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