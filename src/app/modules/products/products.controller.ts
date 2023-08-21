import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProduct } from './products.interface';
import httpStatus from 'http-status';
import { ProductService } from './products.service';

const createChair = catchAsync(async (req: Request, res: Response) => {
  const { chair, ...givenProductData } = req.body;

  const result = await ProductService.createChairService(
    chair,
    givenProductData,
  );

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Chair is created successfully!',
    data: result,
  });
});

export const ProductController = {
  createChair,
};
