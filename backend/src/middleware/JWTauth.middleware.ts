import { env } from "@/schema/env.schema.js";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const SECRET = env.JWT_SECRET
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ code: 401, message: "Sem token! Não autorizado." });
    }

    try {
        if (SECRET) {
            jwt.verify(token, SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json({ code: 403, message: "Token inválido ou expirado" })
                }
            })
        } else {
            throw new Error("Token não recebido do arquivo de configuração")
        }

        next();
    } catch (error) {
        res.status(500).json({ errMessage: error })
    }
}
