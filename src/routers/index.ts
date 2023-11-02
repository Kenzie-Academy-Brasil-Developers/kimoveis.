import { Router } from "express";
import { userRouter } from "./user.router";
import { categoriesRouter } from "./categories.router";
import { realEstateRouter } from "./realEstate.router";
import { scheduleRouter } from "./schedules.router";
import { sessionRouter } from "./session.router";

export const routes: Router = Router()

routes.use('/users', userRouter)
routes.use('login', sessionRouter)
routes.use('/categories', categoriesRouter)
routes.use('/realEstate', realEstateRouter)
routes.use('/schedules', scheduleRouter)
