import express from 'express';
import { TableController } from './table.controller';

const router = express.Router();

router.get('/', TableController.getAllTable);

export const TableRoutes = router;
