export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  name: UserName;
  role: string;
  email: string;
  password: string;
  gender: 'Male' | 'Female';
  mobile: string;
  address?: string;
  profileImage?: string;
};
