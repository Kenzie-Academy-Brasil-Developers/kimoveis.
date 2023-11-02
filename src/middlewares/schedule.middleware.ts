import { NextFunction, Request, Response } from "express";
import { realEstateRepo, scheduleRepo } from '../routers/repositories';  
import AppError from "../errors/AppError.error";
import RealEstate from "../entities/RealEstate.entity";
import Schedule from "../entities/Schedule.entity";

export const verifyRealEstateExists = async (req:Request, res:Response, next:NextFunction):Promise<void>=> {
    const {realEstateId} = req.body
    const realEstate: RealEstate | null = await realEstateRepo.findOne({where:{id:Number(realEstateId)}})

    if(!realEstate) throw new AppError("RealEstate not found", 404)

    return next()
}

export const verifyRealEstateScheduleExist = async (req:Request, res:Response, next:NextFunction):Promise<void>=> {
    const {realEstateId, date, hour} = req.body
    const schedule: Schedule | null = await scheduleRepo.findOne({where:{realEstate:{id:Number(realEstateId)}, hour, date}})

    if(schedule) throw new AppError("Schedule to this real estate at this date and time already exists", 409)

    return next()
}

export const verifyUserScheduleExists = async (req:Request, res:Response, next:NextFunction):Promise<void>=> {
    let {sub} = res.locals.decoded
    sub = Number(sub)
    const { date, hour} = req.body

    const schedule: Schedule | null = await scheduleRepo.findOne({where:{user:{id:sub}, date, hour}})

    if(schedule) throw new AppError("User schedule to this real estate at this date and time already exists", 409)

    return next()

}    
