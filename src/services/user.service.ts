import { User } from "../entities";
import { CreateUser, UpdateUser, UserReadReturn, UserReturn } from "../interfaces/users.interface";
import { userRepo } from "../routers/repositories";
import { userReturnListScema, userReturnScema } from "../schemas/users.schema";

export const createUserService = async (data: CreateUser): Promise <UserReturn> => {
    const user: User = userRepo.create(data)

    await userRepo.save(user)

    return userReturnScema.parse(user)
}

export const readAllUserService = async (): Promise <UserReadReturn> => {
    const users: User[] = await userRepo.find()

    return userReturnListScema.parse(users)
}

export const updateUserService = async (data: UpdateUser, user: User): Promise <UserReturn> => {
    const userUpdate: User = await userRepo.save({...user, ...data})

    return userReturnScema.parse(userUpdate)
}

export const deletesUserService = async (user: User): Promise <void> => {
    await userRepo.softRemove(user)
}