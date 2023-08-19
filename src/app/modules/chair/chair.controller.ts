import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IChair } from './chair.interface';
import { Request, Response } from 'express';
import { ChairService } from './chair.service';

const createChair = catchAsync(async (req: Request, res: Response) => {
  const chairData = req.body;
  const result = await ChairService.createChairService(chairData);

  sendResponse<IChair>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Chair is created successfully!',
    data: result,
  });
});

export const ChairController = {
  createChair,
};
