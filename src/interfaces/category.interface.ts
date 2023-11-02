import { z } from "zod";
import { Repository } from "typeorm";
import {  Category} from "../entities";
import { createCategorySchema, readAllCategorySchema } from "../schemas/category.schema";

export type CreateCategory = z.infer<typeof createCategorySchema>
export type CategoryReadAll = z.infer<typeof readAllCategorySchema>
export type CategoryRepo = Repository<Category>
