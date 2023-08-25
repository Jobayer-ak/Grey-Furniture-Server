import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IChair } from './chair.interface';
import { Request, Response } from 'express';
import { ChairService } from './chair.service';
import pick from '../../../shared/pick';
import { chairFilterableFields } from './chair.constant';
import { pagiantionFields } from '../../../constants/pagination';

const getAllChair = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, chairFilterableFields);
  const pagiantionOptions = pick(req.query, pagiantionFields);
  const result = await ChairService.getAllChairService(
    filters,
    pagiantionOptions,
  );

  sendResponse<IChair[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Chair is created successfully!',
    meta: result.meta,
    data: result.data,
  });
});

export const ChairController = {
  getAllChair,
};
