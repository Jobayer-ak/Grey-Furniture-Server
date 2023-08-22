import express from 'express';
import { ChairController } from './chair.controller';
// import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-chair',
  // validateRequest(createChairZodSchema),
  ChairController.createChair,
);

export const ChairRoutes = router;
