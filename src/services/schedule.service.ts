import { RealEstate, Schedule, User } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateSchedule } from "../interfaces/schedule.interface";
import { realEstateRepo, scheduleRepo, userRepo } from "../routers/repositories";

export const createScheduleService = async (data:CreateSchedule, id:number): Promise<void> => {
    const newDate = new Date(data.date).getDay()
    if((newDate === 0) || (newDate === 6)) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    const time = Number(data.hour.split(':')[0])
    if((time < 8) || (newDate > 18)) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)

    const realEstate: RealEstate | null  = await realEstateRepo.findOneBy( {id:data.realEstateId} )
    const user: User | null = await userRepo.findOneBy( {id: id})

    await scheduleRepo.save({...data, realEstate: realEstate!, user: user!})
}

export const readAllscheduleService = async (id:number): Promise<RealEstate> => {
    const realEstate: RealEstate | null  = await realEstateRepo.findOne( {where:{id}, relations: {schedule:{user: true}, address:true, category:true} })
 
    if(!realEstate) throw new AppError('realEstate not found', 404)

    return realEstate
}