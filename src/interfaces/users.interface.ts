import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, userLoginSchema, userReturnSchema, userWithoutAdmin } from "../schemas/users.schema";
import { User } from "../entities";

export type CreateUser = z.infer<typeof createUserSchema>
export type WithoutAdminUser = z.infer<typeof userWithoutAdmin>
export type UpdateBodyUser = Omit<CreateUser, 'admin'>
export type UpdateUser = DeepPartial<UpdateBodyUser>
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
export type ReturnLogin = {token:string}
export type UserReadReturn = UserReturn[]

export type UserRepo = Repository<User>