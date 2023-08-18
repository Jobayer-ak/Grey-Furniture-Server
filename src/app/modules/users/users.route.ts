import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import createUserZodSchema from './users.validation';
import { UserController } from './users.controller';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(createUserZodSchema),
  UserController.createUser,
);

export const UserRoutes = router;
