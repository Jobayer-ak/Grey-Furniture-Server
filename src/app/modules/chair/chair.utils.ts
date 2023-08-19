import { Chair } from './chair.model';

export const findLastGamingChairId = async (): Promise<string | undefined> => {
  const lastGamingChair = await Chair.findOne(
    { type: 'Gaming' },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastGamingChair?.id ? lastGamingChair.id.substring(2) : undefined;
};

export const findLastOfficeChairId = async (): Promise<string | undefined> => {
  const lastOfficeChair = await Chair.findOne(
    { type: 'Gaming' },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastOfficeChair?.id ? lastOfficeChair.id.substring(2) : undefined;
};

export const generateGamingChairId = async (): Promise<string> => {
  const currentId =
    (await findLastGamingChairId()) || (0).toString().padStart(6, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(6, '0');
  incrementedId = `G-${incrementedId}`;

  return incrementedId;
};

export const generateOfficeChairId = async (): Promise<string> => {
  const currentId =
    (await findLastOfficeChairId()) || (0).toString().padStart(6, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(6, '0');
  incrementedId = `P-${incrementedId}`;

  return incrementedId;
};
