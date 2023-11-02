import { Router } from "express";
import { validateBody, verifyAdm, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyAdressExist } from "../middlewares/realEstate.middleware";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstate.controller";
import { realEstateSchema } from "../schemas/realEstate.schema";

export const realEstateRouter: Router = Router()

realEstateRouter.post('', verifyToken, verifyAdm, verifyPermissions, validateBody(realEstateSchema), verifyAdressExist, createRealEstateController  )
realEstateRouter.get('', readRealEstateController)
