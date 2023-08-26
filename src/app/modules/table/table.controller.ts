import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ITable } from './table.interface';
import { TableService } from './table.service';
import pick from '../../../shared/pick';
import { tableFilterableFields } from './table.constants';
import { pagiantionFields } from '../../../constants/pagination';

const getAllTable = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, tableFilterableFields);

  const paginationOptions = pick(req.query, pagiantionFields);

  const result = await TableService.getAllTableService(
    filters,
    paginationOptions,
  );

  sendResponse<ITable[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All tables retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleTable = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await TableService.getSingleTableService(id);

  sendResponse<ITable>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Table retrieved successfully !',
    data: result,
  });
});

export const TableController = {
  getAllTable,
  getSingleTable,
};
