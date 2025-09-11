import { User } from "@prisma/client";

export default interface IUser {
    findUserById(id: string): Promise<User | null>
    getAllUsers(): Promise<User[] | []>
    deleteUser(id: string): Promise<void>
}