import { NextFunction, Request, Response } from "express";
import ProductRepository from "../repository/product.repo.js";
import { CreateProductInput } from "@/schema/product.schema.js";
import ProductResponse from "../views/product.view.js";
import { NotFoundError } from "@/error/httpErros.js";

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

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.validatedData

            const product = await this.repo.findByid(id)

            if(!product) {
                throw new NotFoundError('Produto nao encontrado')
            }

            await this.repo.delete(id)

            res.status(204).json()
        } catch (err) {
            next(err)
        }
    }

}