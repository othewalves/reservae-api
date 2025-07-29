import { CreateCategoryDTO } from "../dto/category/create-category.dto";
import { createCategory, findCategoryByName } from "../repository/category.repository";
import { hasPermission } from "../utils/has-permission";
import { ExceptionError } from "../utils/exception-error";

class CategoryService {
    async create(user_id: string, dataCategory: CreateCategoryDTO) {

        const isLibrarian = await hasPermission(user_id);

        if (!isLibrarian) {
            throw new ExceptionError('Operação AAAAAAAA inválida', 403, 'user');
        }

        const categoryExists = await findCategoryByName(dataCategory.name);

        if (categoryExists) {
            throw new ExceptionError('Categoria já cadastrada', 400, 'name');
        }

        const category = await createCategory(dataCategory);

        return category;
    };
};

export { CategoryService };