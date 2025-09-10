interface CreateProductDataResponse {
    id: string
    title: string
    description: string
    price: string
    userId: string
    createdAt: Date
    updatedAt: Date
}

interface ProductSchema {
    id: string
    title: string
    description: string
    price: string
    userId: string
    createdAt: Date
    updatedAt: Date
}

export default class ProductResponse {
    create(data: CreateProductDataResponse) {
        return { code: 201, message: "Produto criado com sucesso", data: data}
    }

    getAll(data: ProductSchema[]) {
        return { code: 200, message: "Produtos listados com sucesso", data: data}
    }
}