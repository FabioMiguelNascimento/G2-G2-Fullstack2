import { UserRole } from "@prisma/client";

interface UserData {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}


export default class UserResponse {
    getUserData(data: UserData) {
        return {
            code: 201,
            message: "Dados do usuário listados com sucesso",
            data: { id: data.id, name: data.name, email: data.email, role: data.role }
        };
    }

    deleteUser(data: UserData) {
        return {
            code: 204,
            message: "Usuário deletado com sucesso",
            data: { name: data.name }
        }
    }
}