import express from 'express';
import { SofaController } from './sofa.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SofaValidation } from './sofa.validation';

const router = express.Router();

router.get('/:id', SofaController.getSingleSofa);

router.patch(
  '/:id',
  validateRequest(SofaValidation.updateSofaZodSchema),
  SofaController.updateSofa,
);
router.get('/', SofaController.getAllSofa);

export const SofaRoutes = router;
