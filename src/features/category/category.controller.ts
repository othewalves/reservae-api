import { Request, Response } from "express";

import { CategoryService } from "./category.service";

import { CreateCategoryDTO, CreateCategorySchema } from "./schema";

import { handleError } from "../../utils";

const categoryService = new CategoryService();

class CategoryController {

    async get(req: Request, res: Response) {
        try {
            const categories = await categoryService.get();
            return res.status(200).json(categories);
        } catch (error) {
            return handleError(error, res)

        }
    }

    async createCategory(req: Request, res: Response) {
        try {
            const { user_id } = req;

            console.log('user_id', user_id);


            const dataCategory = CreateCategorySchema.parse(req.body) as CreateCategoryDTO;
            console.log('console 2')
            const category = await categoryService.create(user_id, dataCategory);
            console.log('console 3')

            return res.status(200).json(category);
            console.log('console 4')

        } catch (error) {
            console.log('console 5', error)
            return handleError(error, res);
        }
    };
};

export { CategoryController };