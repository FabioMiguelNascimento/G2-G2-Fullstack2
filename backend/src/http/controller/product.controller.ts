import { NextFunction, Request, Response } from "express";
import ProductRepository from "../repository/product.repo.js";
import { CreateProductInput } from "@/schema/product.schema.js";
import ProductResponse from "../views/product.view.js";

export default class ProductController {
    private repo: ProductRepository;
    private view: ProductResponse;

    constructor() {
        this.repo = new ProductRepository()
        this.view = new ProductResponse()
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: CreateProductInput = req.validatedData
            const userId = req.userId

            const product = await this.repo.create(data, userId)

            res.status(201).json(this.view.create(product))
        } catch (err) {
            next(err)
        }
    }
}