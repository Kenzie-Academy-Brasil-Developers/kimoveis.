import { z } from "zod";
import { Repository } from "typeorm";
import { createRealEstateSchema} from "../schemas/realEstate.schema";
import { Address, RealEstate } from "../entities";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>

export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>