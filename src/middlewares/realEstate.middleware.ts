import { NextFunction, Request, Response } from "express"
import Address from "../entities/Address.entity"
import { addressRepo } from "../routers/repositories"
import AppError from "../errors/AppError.error"

export const verifyAdressExist = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    const {address} = req.body
    const addressExist: Address | null = await addressRepo.findOne({
        where:{
            street: address.street,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode,
        }
    })

    if(addressExist) throw new AppError("Address already exists", 409)

    return next()
}