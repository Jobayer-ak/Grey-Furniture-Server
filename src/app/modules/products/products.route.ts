import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './products.controller';
import createChairZodSchema from './products.validation';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(createChairZodSchema),
  ProductController.createChair,
);

export const ProductRoutes = router;
