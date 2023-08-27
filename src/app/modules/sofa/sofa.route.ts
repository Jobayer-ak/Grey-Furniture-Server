import express from 'express';
import { SofaController } from './sofa.controller';

const router = express.Router();

router.get('/', SofaController.getAllSofa);

export const SofaRoutes = router;
