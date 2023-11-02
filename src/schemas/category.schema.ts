import { z } from "zod";

export const categorySchema = z.object({
    id:z.number().positive(),
    name:z.string().max(45)
})

export const createCategorySchema = categorySchema.omit({id:true, createAt:true, updateAt:true, deleteAt:true})
export const readAllCategorySchema = categorySchema.array()
