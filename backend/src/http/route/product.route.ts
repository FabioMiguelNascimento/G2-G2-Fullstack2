import { authenticateToken } from '@/middleware/JWTauth.middleware.js'
import { validatePermission } from '@/middleware/validatePermission.middleware.js'
import { validateBody, validateParams } from '@/middleware/validateRequest.middleware.js'
import { createProdcutSchema, deleteProductSchema } from '@/schema/product.schema.js'
import express from 'express'
import ProductController from '../controller/product.controller.js'

const router = express.Router()

const productController = new ProductController()

router.get('/', productController.getAll)

router.use(authenticateToken, validatePermission(['ADMIN']))

router.post('/', validateBody(createProdcutSchema), productController.create)
router.delete('/:id', validateParams(deleteProductSchema), productController.delete)

export default router