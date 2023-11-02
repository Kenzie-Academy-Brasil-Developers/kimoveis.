import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, userLoginScema, userReturnScema } from "../schemas/users.schema";
import { User } from "../entities";

export type CreateUser = z.infer<typeof createUserSchema>
export type UpdateBodyUser = Omit<CreateUser, 'admin'>
export type UpdateUser = DeepPartial<UpdateBodyUser>
export type UserReturn = z.infer<typeof userReturnScema>
export type UserReadReturn = UserReturn[]
export type UserLogin = z.infer<typeof userLoginScema>
export type ReturnLogin = {token:string}

export type UserRepo = Repository<User>