import { authenticateToken } from '@/middleware/JWTauth.middleware.js';
import { validatePermission } from '@/middleware/validatePermission.middleware.js';
import { validateParams } from '@/middleware/validateRequest.middleware.js';
import { idSchema } from '@/schema/user.schema.js';
import express from 'express';
import UserController from '../controller/user.controller.js';

const router = express.Router();
const userController = new UserController()

// Rota para listar os dados do próprio usuário
router.get('/', authenticateToken, userController.getSelfUserData)

// Rota para usuário deletar seu próprio usuário
router.delete('/', authenticateToken, userController.selfDeleteUserData)

// Rota para admin deletar usuário pelo id
router.delete('/:id', authenticateToken, validatePermission(['ADMIN']), validateParams(idSchema), userController.deleteUserData);

export default router;