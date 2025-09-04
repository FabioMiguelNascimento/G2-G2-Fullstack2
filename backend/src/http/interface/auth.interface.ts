import { RegisterInput } from "@/schema/auth.schema.js";
import { User } from "@prisma/client";

export default interface IAuth {
    findUserByEmail(email:string): Promise<User | null>
    register(userInput: RegisterInput): Promise <User>
}