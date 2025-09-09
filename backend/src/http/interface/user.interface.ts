import { User } from "@prisma/client";

export default interface IUser {
    findUserById(id: string): Promise<User | null>
}