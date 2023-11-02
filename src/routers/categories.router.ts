import { Router } from "express";
import { verifyUniqueCategoryName } from "../middlewares/category.middleware";
import { validateBody, verifyAdm, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createCategoryController, readCategoryController, readRealEstateCategoryController } from "../controllers/categorie.controller";
import { createCategorySchema } from "../schemas/category.schema";

export const categoriesRouter: Router = Router()

categoriesRouter.post('',verifyToken, validateBody(createCategorySchema), verifyUniqueCategoryName,verifyPermissions, verifyAdm, createCategoryController )
categoriesRouter.get('', readCategoryController)
categoriesRouter.get('/:id/realEstate',  readRealEstateCategoryController)
