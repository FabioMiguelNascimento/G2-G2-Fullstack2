import { ConflictError } from "@/error/httpErros.js";
import AuthRepository from "@/http/repository/auth.repo.js";
import { RegisterInput } from "@/schema/auth.schema.js";
import { encodePassword } from "@/utils/bcrypt.js";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AuthResponse from "../views/auth.view.js";

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

            res.status(200).json( new AuthResponse().register(newUser) )
        } catch (err) {
            next(err)
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let userInput:  RegisterInput = req.validatedData
            const existingUser = await repo.findUserByEmail(userInput.email)

            if (!existingUser) res.status(404).json({ code: 404, message: `Usuário com o email ${userInput.email} não encontrado` });

            // Faz o hash na senha do usuario
            const hashedPassword = encodePassword(userInput.password)

            const user = {...existingUser, password: hashedPassword};
            const token = jwt.sign(user, await repo.decodeToken(), {expiresIn: '1h'})

            res.status(200).json(new AuthResponse().login(user, token));
        } catch (err) {
            next(err)
        }
    }
}