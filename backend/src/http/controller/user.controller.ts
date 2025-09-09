import { ConflictError, NotFoundError } from "@/error/httpErros.js";
import { decodePassword, encodePassword } from "@/utils/bcrypt.js";
import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/user.repo.js";

const repo = new UserRepository();
export default class UserController {
    getUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.userId
            const user = repo.findUserById(userId);

            if (!user)
                throw new NotFoundError("Usuário não encontrado");

            res.status(200).json({ code: 200, user: user});
        } catch (error) {
            next(error)
        }
    }
}
