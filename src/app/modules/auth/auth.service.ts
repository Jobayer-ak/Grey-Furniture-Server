import { ILoginUser, ILoginUserResponse } from './auth.interface';

const loginUserService = async (
  payload: ILoginUser,
): Promise<ILoginUserResponse> => {
  const { email, password } = payload;
};
