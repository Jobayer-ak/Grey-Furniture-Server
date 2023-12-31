import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './users.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IUser } from './users.interface';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await UserService.createUserService(userData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully!',
    data: result,
  });
});

export const UserController = {
  createUser,
};
