import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  // const result = await
});
