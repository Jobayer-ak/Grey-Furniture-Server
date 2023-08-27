import express from 'express';
import { TableController } from './table.controller';
import validateRequest from '../../middlewares/validateRequest';
import { TableValidation } from './table.validation';

const router = express.Router();

router.get('/:id', TableController.getSingleTable);
router.get('/', TableController.getAllTable);
router.patch(
  '/:id',
  validateRequest(TableValidation.updateTableZodSchema),
  TableController.updateTable,
);

export const TableRoutes = router;
