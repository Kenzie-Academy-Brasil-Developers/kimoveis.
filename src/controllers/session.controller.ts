import { Request, Response } from "express";
import { loginService } from "../services/session.service";

export const loginController = async (req:Request, res:Response): Promise<Response> => {
    const token = await loginService(req.body)
    console.log(token);
    return res.status(200).json(token)
}