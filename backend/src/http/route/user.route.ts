import { authenticateToken } from '@/middleware/JWTauth.middleware.js';
import { validateBody } from '@/middleware/validateRequest.middleware.js';
import { updateSchema } from '@/schema/user.schema.js';
import UserController from '../controller/user.controller.js';
import express from 'express';

const router = express.Router();
const userController = new UserController()

// Rota para listar os dados do usuário
router.get('/', authenticateToken, userController.getUserData)

export default router;