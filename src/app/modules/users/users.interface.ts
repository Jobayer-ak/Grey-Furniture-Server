import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  name: UserName;
  role: 'admin' | 'user';
  email: string;
  password: string;
  gender: 'Male' | 'Female';
  mobile: string;
  address?: string;
  profileImage?: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
