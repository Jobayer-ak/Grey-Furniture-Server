import express from 'express';
import { ChairController } from './chair.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ChairValidation } from './chair.validation';

const router = express.Router();

router.get('/:id', ChairController.getSingleChair);
router.get('/', ChairController.getAllChair);
router.patch(
  '/:id',
  validateRequest(ChairValidation.updateChairZodSchema),
  ChairController.updateChair,
);

export const ChairRoutes = router;
