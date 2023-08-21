import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './products.controller';

const router = express.Router();

router.post(
  '/admin/create-product',
  validateRequest(),
  ProductController.createChair,
);

export const ProductRoutes = router;
