import { Router } from 'express';
import getAllDataController from '../controllers/data.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();
router.use(authMiddleware);

// Endpoint genérico SOLO LECTURA
router.get('/:resource', getAllDataController);

export default router;