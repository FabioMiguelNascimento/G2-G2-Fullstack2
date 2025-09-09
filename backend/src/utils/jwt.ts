import { env } from "@/schema/env.schema.js";
import { UserRole } from "@prisma/client";
import jwt  from "jsonwebtoken";

export interface SignTokenData {
    id: string,
    role: UserRole
}

export const signToken = (tokenPayload: SignTokenData) => {
  return jwt.sign(tokenPayload, env.JWT_SECRET , {expiresIn: '10h'})
}