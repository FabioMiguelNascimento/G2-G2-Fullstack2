import { NotFoundError, UnauthorizedError } from "@/error/httpErros.js";
import { UserRole } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export const validatePermission = (roles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const role = req.userRole

        if(!role){
            throw new NotFoundError("Permissao nao encontrada no token")
        }

        const includes = roles.includes(role)

        if (!includes) {
            throw new UnauthorizedError("Voce nao tem permissao para acessar")
        }

        next()
    }
}