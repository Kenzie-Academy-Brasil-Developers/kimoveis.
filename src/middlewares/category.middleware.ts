import 'dotenv/config';
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.error";
import Category from '../entities/Category.entity';
import { categoryRepo } from '../routers/repositories';

export const verifyUniqueCategoryName = async (req:Request, res:Response, next:NextFunction):Promise<void>=> {
    const {name} = req.body
    const category: Category | null = await categoryRepo.findOneBy({name})

    if(category) throw new AppError("Category already exists", 409)

    return next()
}

