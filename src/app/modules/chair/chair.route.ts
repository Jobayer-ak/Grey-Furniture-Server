import express from 'express';
import { ChairController } from './chair.controller';
// import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/:id', ChairController.getSingleChair);
router.get('/', ChairController.getAllChair);

export const ChairRoutes = router;
