import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProduct } from './products.interface';
import httpStatus from 'http-status';
import { ProductService } from './products.service';

const createChair = catchAsync(async (req: Request, res: Response) => {
  const { chair } = req.body;

  const result = await ProductService.createChairService(chair);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Chair is created successfully!',
    data: result,
  });
});

const createTable = catchAsync(async (req: Request, res: Response) => {
  const { table } = req.body;

  const result = await ProductService.createTableService(table);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Table is created successfully!',
    data: result,
  });
});

const createSofa = catchAsync(async (req: Request, res: Response) => {
  const { sofa } = req.body;

  const result = await ProductService.createSofaService(sofa);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sofa is created successfully!',
    data: result,
  });
});

export const ProductController = {
  createChair,
  createTable,
  createSofa,
};
