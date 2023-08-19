import { IChair } from './chair.interface';
import { Chair } from './chair.model';

const createChairService = async (
  chairData: IChair,
): Promise<IChair | null> => {
  //   console.log('user data: ', userData);

  const result = await Chair.create(chairData);

  return result;
};

export const ChairService = {
  createChairService,
};
