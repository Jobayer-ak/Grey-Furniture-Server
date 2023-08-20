import { IChair } from './chair.interface';
import { Chair } from './chair.model';
import { generateGamingChairId, generateOfficeChairId } from './chair.utils';

const createChairService = async (
  chairData: IChair,
): Promise<IChair | null> => {
  //   console.log('user data: ', userData);

  const chairId =
    chairData.type === 'Gaming'
      ? await generateGamingChairId()
      : await generateOfficeChairId();

  chairData.id = chairId;

  const result = await Chair.create(chairData);

  return result;
};

export const ChairService = {
  createChairService,
};
