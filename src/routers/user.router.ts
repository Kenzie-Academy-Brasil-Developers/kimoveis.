import { Router } from "express";
import { verifyUniqueUserEmail, verifyUserExist } from "../middlewares/user.middleware";
import { validateBody, verifyAdm, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createUserController, deleteController, readAllUserController, updateUserController } from "../controllers/user.controller";
import { createUserSchema, updateUSerSchema} from "../schemas/users.schema";

export const userRouter: Router = Router()

userRouter.post('/', validateBody(createUserSchema), verifyUniqueUserEmail, createUserController )
userRouter.get('/', verifyToken, verifyAdm, verifyPermissions, readAllUserController  )
userRouter.patch('/:id', verifyToken, verifyUserExist, verifyPermissions, validateBody(updateUSerSchema),updateUserController )
userRouter.delete('/:id', verifyToken, verifyUserExist, verifyPermissions, deleteController) 