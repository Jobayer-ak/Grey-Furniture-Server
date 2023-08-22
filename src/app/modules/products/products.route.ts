import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './products.controller';
import {
  createChairZodSchema,
  createSofaZodSchema,
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

router.post(
  '/create-product/sofa',
  validateRequest(createSofaZodSchema),
  ProductController.createSofa,
);

export const ProductRoutes = router;
