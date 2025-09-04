import AuthController from '@/http/controller/auth.controller.js'
import { validateBody } from '@/middleware/validateRequest.middleware.js'
import { registerSchema } from '@/schema/auth.schema.js'
import express from 'express'

const router = express.Router()
const authController = new AuthController()

router.post('/', validateBody(registerSchema), authController.register)

export default router