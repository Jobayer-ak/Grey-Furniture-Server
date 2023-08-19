import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../users/users.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import { jwtHelpers } from '../../../helpers/jwt.helper';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const loginUserService = async (
  payload: ILoginUser,
): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const user = new User();

  const isUserExist = await user.isUserExist(email);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist!');
  }

  if (
    isUserExist.password &&
    !user.isPasswordMatch(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect!');
  }

  const { email: userEmail, role } = isUserExist;

  // create access token && refresh token
  const accessToken = jwtHelpers.createToken(
    { userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelpers.createToken(
    {
      userEmail,
      role,
    },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  loginUserService,
};
