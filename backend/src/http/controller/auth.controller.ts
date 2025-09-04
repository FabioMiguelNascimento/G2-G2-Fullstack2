import { ConflictError } from "@/error/httpErros.js";
import AuthRepository from "@/http/repository/auth.repo.js";
import { RegisterInput } from "@/schema/auth.schema.js";
import { encodePassword } from "@/utils/bcrypt.js";
import { NextFunction, Request, Response } from "express";

const repo = new AuthRepository()
export default class AuthController{
    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let userInput: RegisterInput = req.validatedData

            const existingUser = await repo.findUserByEmail(userInput.email)

            // Verifica se ja existe um user com esse email
            if (existingUser) {
                throw new ConflictError("Usuario ja cadastrado com esse email, que tal fazer login?")
            }

            // Faz o hash na senha do usuario
            const hashedPassword = encodePassword(userInput.password)

            userInput = {...userInput, password: hashedPassword}

            let newUser = await repo.register(userInput)

            // Remove a senha da resposta
            const  {password, ...userWithoutPassword} = newUser

            res.status(200).json({ code: 200, message: "Registro feito com sucesso", data: userWithoutPassword})
        } catch (err) {
            next(err)
        }
    }
}