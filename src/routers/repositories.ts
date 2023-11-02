import { AppDataSource } from "../data-source";
import {Category, Address, User, RealEstate, Schedule} from "../entities/index";
import { ScheduleRepo, RealEstateRepo , AddressRepo, CategoryRepo, UserRepo } from "../interfaces/index";

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)