import { RealEstate, Schedule, User } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateSchedule } from "../interfaces/schedule.interface";
import { realEstateRepo, scheduleRepo, userRepo } from "../routers/repositories";

export const createScheduleService = async (data:CreateSchedule, userId:number): Promise<Schedule> => {
    const newDate = new Date(data.date).getDay()
    if(newDate === 0 || newDate === 6) throw new AppError("Invalid date, work days are monday to friday", 400)

    const time = Number(data.hour.split(":")[0])
    if(time < 8 || time > 18) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)

    const realEstate: RealEstate | null  = await realEstateRepo.findOneBy( {id: Number(data.realEstateId)} )
    const user: User | null = await userRepo.findOneBy( {id: userId})

    const schedule = await scheduleRepo.save({...data, realEstate: realEstate!, user: user!})

    return schedule
}

export const readAllscheduleService = async (id:number): Promise<RealEstate> => {
    const realEstate: RealEstate | null  = await realEstateRepo.findOne( {where:{id}, relations: {schedules:{user: true}, address:true, category:true} })
 
    if(!realEstate) throw new AppError("RealEstate not found", 404)

    return realEstate
}