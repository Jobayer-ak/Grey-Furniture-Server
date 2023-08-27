import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { ISofa } from './sofa.interface';
import httpStatus from 'http-status';
import { SofaService } from './sofa.service';
import { pagiantionFields } from '../../../constants/pagination';
import { sofaFilterableFields } from './sofa.constants';

const getAllSofa = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, sofaFilterableFields);

  const paginationOptions = pick(req.query, pagiantionFields);

  const result = await SofaService.getAllSofaService(
    filters,
    paginationOptions,
  );

  sendResponse<ISofa[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sofa retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSofa = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await SofaService.getSingleSofaService(id);

  sendResponse<ISofa>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sofa retrieved successfully !',
    data: result,
  });
});

export const SofaController = {
  getAllSofa,
  getSingleSofa,
};
