import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './products.controller';
import {
  createChairZodSchema,
  createTableZodSchema,
} from './products.validation';

const router = express.Router();

router.post(
  '/create-product/chair',
  validateRequest(createChairZodSchema),
  ProductController.createChair,
);

router.post(
  '/create-product/table',
  validateRequest(createTableZodSchema),
  ProductController.createTable,
);

export const ProductRoutes = router;
