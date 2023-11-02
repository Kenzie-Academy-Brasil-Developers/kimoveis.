import { Router } from "express";
import { validateBody, verifyAdm, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateExists, verifyRealEstateScheduleExist, verifyUserScheduleExists } from "../middlewares/schedule.middleware";
import { scheduleSchema } from "../schemas/schedule.schema";
import { createScheduleController, readAllscheduleController } from "../controllers/schedule.controller";

export const scheduleRouter: Router = Router()

scheduleRouter.post('', verifyToken, verifyPermissions,validateBody(scheduleSchema), verifyRealEstateExists, verifyRealEstateScheduleExist, verifyUserScheduleExists, createScheduleController)

scheduleRouter.get('/realEstate/:id', verifyToken, verifyRealEstateExists, readAllscheduleController)
