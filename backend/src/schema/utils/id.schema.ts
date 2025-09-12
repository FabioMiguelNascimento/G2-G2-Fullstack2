import z from "zod";

export const idSchema = z.object({
    id: z.string().min(1, "ID nao fornecido nos parametros")
})

export type Id = z.infer<typeof idSchema>