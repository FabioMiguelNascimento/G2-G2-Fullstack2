import { CreateProductInput } from "@/schema/product.schema.js";
import { Id } from "@/schema/utils/id.schema.js";
import { Product } from "@prisma/client";

export default interface IProduct {
    create(data: CreateProductInput, userId: string): Promise<Product>
    delete(id: string): Promise<void>
    findByid(id: string): Promise<Product | null>
    getAll(): Promise<Product[] | null>
    getById(id: Id): Promise<Product | null>
}