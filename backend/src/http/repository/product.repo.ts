import { CreateProductInput } from "@/schema/product.schema.js";
import { Product } from "@prisma/client";
import IProduct from "../interface/product.interface.js";
import prisma from "db/prisma.js";

export default class ProductRepository implements IProduct {
    async create(data: CreateProductInput, userId: string): Promise<Product> {
        return prisma.product.create({
            data: {...data, userId}
        })
    }
}