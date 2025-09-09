import { CreateProductInput } from "@/schema/product.schema.js";
import { Product } from "@prisma/client";
import IProduct from "../interface/product.interface.js";
import prisma from "db/prisma.js";

export default class ProductRepository implements IProduct {
    async create(data: CreateProductInput, userId: string): Promise<Product> {
        return await prisma.product.create({
            data: {...data, userId}
        })
    }

    async findByid(id: string): Promise<Product | null> {
        return await prisma.product.findUnique({
            where: { id: id}
        })
    }


    async delete(id: string): Promise<void> {
        await prisma.$transaction([
            prisma.productInCart.deleteMany({
                where: { productId: id }
            }),
            prisma.product.delete({
                where: { id: id },  
            })
        ])
    }
}