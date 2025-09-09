import { authenticateToken } from '@/middleware/JWTauth.middleware.js'
import { validatePermission } from '@/middleware/validatePermission.middleware.js'
import { validateBody } from '@/middleware/validateRequest.middleware.js'
import { createProdcutSchema } from '@/schema/product.schema.js'
import express from 'express'
import ProductController from '../controller/product.controller.js'

const router = express.Router()

const productController = new ProductController()

router.post('/', authenticateToken, validatePermission(['ADMIN']), validateBody(createProdcutSchema), productController.create)

export default router