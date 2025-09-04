import { ConflictError } from "@/error/httpErros.js";
import AuthRepository from "@/http/repository/auth.repo.js";
import { RegisterInput } from "@/schema/auth.schema.js";
import { NextFunction, Request, Response } from "express";

const repo = new AuthRepository()
export default class AuthController{
    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userInput: RegisterInput = req.validatedData

            const existingUser = await repo.findUserByEmail(userInput.email)

            if (existingUser) {
                throw new ConflictError("Usuario ja cadastrado com esse email, que tal fazer login?")
            }

            const newUser = await repo.register(userInput)

            res.status(200).json({ code: 200, message: "Registro feito com sucesso", data: newUser})
        } catch (err) {
            next(err)
        }
    }
}