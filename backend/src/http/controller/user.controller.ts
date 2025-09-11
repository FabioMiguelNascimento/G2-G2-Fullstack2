import { NotFoundError } from "@/error/httpErros.js";
import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/user.repo.js";
import UserResponse from "../views/user.view.js";

const repo = new UserRepository();
const viewResponse = new UserResponse();
export default class UserController {
    getSelfUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.userId
            const user = await repo.findUserById(userId);

            if (!user)
                throw new NotFoundError("Usuário não encontrado");

            res.status(200).json(viewResponse.getUserData(user));
        } catch (error) {
            next(error)
        }
    }

    listAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await repo.getAllUsers();

            const allUsers = users.map(user => {
                const { password, createdAt, updatedAt, ...allUsers } = user
                return allUsers
            })
            
            res.status(200).json(allUsers);
        } catch (error) {
            next(error)
        }
    }

    updateSelfUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.userId;
            const bodyData = req.validatedData;
            console.log(bodyData)
            const user = repo.findUserById(userId);
            if (!user)
                throw new NotFoundError("Usuário não encontrado");

            const newUserData = await repo.updateUser(userId, bodyData);

            res.status(200).json(newUserData);

        } catch (error) {
           next(error) 
        }
    }

    selfDeleteUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.userId
            const user = await repo.findUserById(userId);

            if (!user)
                throw new NotFoundError("Usuário não encontrado");

            await repo.deleteUser(userId);
            res.status(204).json();
        } catch (error) {
            next(error)
        }
    }

    deleteUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id }= req.validatedData;
            console.log(id)
            const user = await repo.findUserById(id);

            if (!user)
                throw new NotFoundError("Usuário não encontrado")

            await repo.deleteUser(id)
            res.status(204).json();

        } catch (error) {
            next(error)
        }
    }
}
