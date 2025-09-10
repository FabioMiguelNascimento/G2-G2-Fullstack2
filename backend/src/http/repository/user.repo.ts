import { User } from "@prisma/client";
import IUser from "../interface/user.interface.js";
import prisma from "db/prisma.js";

export default class UserRepository implements IUser {
    async findUserById(id: string): Promise<User | null> {
        return await prisma.user.findUnique({where: {id: id}});
    }

    async deleteUser(id: string): Promise<void> {
        await prisma.$transaction([
            prisma.user.delete({where: {id: id}})
        ])
    }

}