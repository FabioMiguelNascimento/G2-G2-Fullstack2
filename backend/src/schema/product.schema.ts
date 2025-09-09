import z from 'zod'

export const createProdcutSchema = z.object({
    title: z.string().min(2, "Titulo do produto precisa ser pelo menos 2 caracteres"),
    description: z.string().min(2, "Descricao precisa ser pelo menos 2 carecteres"),
    price: z.string().min(0.02, "Preco precisa ser pelo menos 0.02")
})

export type CreateProductInput = z.infer<typeof createProdcutSchema>