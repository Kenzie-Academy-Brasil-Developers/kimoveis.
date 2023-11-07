import { Router } from "express";
import { validateBody, verifyAdm, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyParamRealEstateExist, verifyRealEstateExists, verifyRealEstateScheduleExist, verifyUserScheduleExists } from "../middlewares/schedule.middleware";
import { createScheduleSchema } from "../schemas/schedule.schema";
import { createScheduleController, readAllscheduleController } from "../controllers/schedule.controller";

export const scheduleRouter: Router = Router()

scheduleRouter.post('/', verifyToken, validateBody(createScheduleSchema), verifyRealEstateExists, verifyRealEstateScheduleExist, verifyUserScheduleExists, createScheduleController)

scheduleRouter.get('/realEstate/:id', verifyToken, verifyAdm, verifyPermissions, verifyParamRealEstateExist, readAllscheduleController)
