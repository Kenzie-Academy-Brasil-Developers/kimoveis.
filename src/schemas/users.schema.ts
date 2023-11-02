import { z } from "zod";

export const userSchema = z.object({
    id:z.number().positive(),
    name:z.string().max(45),
    email:z.string().email(),
    admin:z.boolean().default(false),
    password:z.string().max(120),
    createAt:z.string(),
    updateAt:z.string(),
    deleteAt:z.string().nullable(),
})

export const createUserSchema = userSchema.omit({id:true, createAt:true, updateAt:true, deleteAt:true})
export const updateUSerSchema = createUserSchema.partial()
export const userReturnScema = userSchema.omit({password:true})
export const userReturnListScema = userReturnScema.array()
export const userReadScema = userReturnScema.array()
export const userLoginScema = userSchema.pick({email:true, password:true})
