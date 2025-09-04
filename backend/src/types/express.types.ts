import { UserRole } from "@prisma/client";

declare module 'express-serve-static-core' {
  export interface Request {
    userId: string;
    userRole: UserRole;
    validatedData: any;
  }
}