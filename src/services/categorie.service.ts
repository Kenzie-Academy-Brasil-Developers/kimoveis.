import { Category, User } from "../entities";
import AppError from "../errors/AppError.error";
import { CategoryReadAll, CreateCategory } from "../interfaces/category.interface";
import { categoryRepo } from "../routers/repositories";

export const createCategoryService = async (data: CreateCategory): Promise<Category> => {
    return await categoryRepo.save(data)
}

export const readCategoryService = async (): Promise<CategoryReadAll> => {
    return await categoryRepo.find()
}

export const readRealEstateCategoryService = async (id: number): Promise <Category> => {
    const category: Category | null  = await categoryRepo.findOne({
        where:{
            id
        },
        relations:{
            realEstate:true
        }
    })

    if(!category) throw new AppError("Category not found", 404)

    return category
}
