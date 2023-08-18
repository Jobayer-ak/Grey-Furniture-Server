import { IUser } from './users.interface';
import { User } from './users.model';

const createUserService = async (userData: IUser): Promise<IUser | null> => {
  //   console.log('user data: ', userData);

  const result = await User.create(userData);

  return result;
};

export const UserService = {
  createUserService,
};
