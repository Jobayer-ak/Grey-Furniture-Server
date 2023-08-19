import express from 'express';
import { ChairController } from './chair.controller';
import validateRequest from '../../middlewares/validateRequest';
import createChairZodSchema from './chair.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(createChairZodSchema),
  ChairController.createChair,
);

export const ChairRoutes = router;
