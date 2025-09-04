import { NextFunction, Request, Response } from "express";

export default class AuthController{
    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, password } = req.body

            if (!name) {
                
            }
        } catch (err) {
            
        }
    }
}