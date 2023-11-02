import { Address, Category, RealEstate } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateRealEstate } from "../interfaces/realEstate.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../routers/repositories";

export const createRealEstateService = async (data:CreateRealEstate): Promise<RealEstate> => {
    const category: Category | null = await categoryRepo.findOneBy({id:data.categoryId})  
    
    if(!category) throw new AppError("Category not found", 404)

    const address: Address = await addressRepo.save(data.address)
    const realEstate: RealEstate | null = await realEstateRepo.save({...data, address, category: category!})

    return realEstate
}

export const readRealEstateService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
        relations:{
            address:true
        }
    })
}