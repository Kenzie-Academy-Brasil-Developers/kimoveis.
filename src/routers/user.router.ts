import { Router } from "express";
import { verifyUniqueUserEmail, verifyUserExist } from "../middlewares/user.middleware";
import { validateBody, verifyAdm, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createUserController, deleteController, readAllUserController, updateUserController } from "../controllers/user.controller";
import { createUserSchema, updateUSerSchema } from "../schemas/users.schema";

export const userRouter: Router = Router()

userRouter.post('', verifyUniqueUserEmail, createUserController )
userRouter.get('', verifyAdm, readAllUserController  )
userRouter.patch('/:id', verifyUserExist, verifyToken,verifyPermissions, verifyAdm,  validateBody(updateUSerSchema), updateUserController )
userRouter.delete('/:id', verifyToken, verifyUserExist, verifyPermissions, deleteController)