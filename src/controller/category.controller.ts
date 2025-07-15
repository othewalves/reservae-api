import { Request, Response } from "express";
import { handleError } from "../utils/handle-error";
import { CategoryService } from "../services";
import { CreateCategoryDTO, CreateCategorySchema } from "../dto/category/create-category.dto";

const categoryService = new CategoryService();

class CategoryController {
    async createCategory(req: Request, res: Response) {
        try {
            const { user_id } = req;
            const dataCategory: CreateCategoryDTO = CreateCategorySchema.parse(req.body);
            const category = await categoryService.create(user_id, dataCategory);

            return res.status(200).json(category);

        } catch (error) {
            return handleError(error, res);
        }
    };
};

export { CategoryController };