import z from 'zod';
import { passwordSchema } from './auth.schema.js';

export const updateSchema = z.object({
    name: z.string().min(1).optional,
    email: z.email().optional,
    password: passwordSchema.optional()
});

export type UpdateInput = z.infer<typeof updateSchema>