interface CreateProductDataResponse {
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
}