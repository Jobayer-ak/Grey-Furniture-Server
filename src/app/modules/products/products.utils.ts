import { Chair } from '../chair/chair.model';
import { Table } from '../table/table.model';

// find last chair id and generate chair id
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

// find last table id and generate table id
export const findLastElevatingTableId = async (): Promise<
  string | undefined
> => {
  const lastElevatingTable = await Table.findOne(
    { type: 'Elevating' },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastElevatingTable?.id
    ? lastElevatingTable.id.substring(3)
    : undefined;
};

export const findLastNormalTableId = async (): Promise<string | undefined> => {
  const lastNormalTableId = await Table.findOne(
    { type: 'Normal' },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastNormalTableId?.id ? lastNormalTableId.id.substring(3) : undefined;
};

export const generateElevatingTableId = async (): Promise<
  string | undefined
> => {
  const currentId =
    (await findLastElevatingTableId()) || (0).toString().padStart(6, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(6, '0');
  incrementedId = `ED-${incrementedId}`;

  return incrementedId;
};

export const generateNormalTableId = async (): Promise<string | undefined> => {
  const currentId =
    (await findLastNormalTableId()) || (0).toString().padStart(6, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(6, '0');
  incrementedId = `ND-${incrementedId}`;

  return incrementedId;
};

// find last sofa id and generate sofa id

export const findLastNormalSofaId = async (): Promise<string | undefined> => {
  const lastNormalSofa = await Chair.findOne(
    { type: 'Normal' },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastNormalSofa?.id ? lastNormalSofa.id.substring(2) : undefined;
};

export const findLastFoldingSofaId = async (): Promise<string | undefined> => {
  const lastFoldingSofa = await Chair.findOne(
    { type: 'Folding' },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFoldingSofa?.id ? lastFoldingSofa.id.substring(2) : undefined;
};
export const generateNormalSofalId = async (): Promise<string> => {
  const currentId =
    (await findLastNormalSofaId()) || (0).toString().padStart(6, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(6, '0');
  incrementedId = `N-${incrementedId}`;

  return incrementedId;
};

export const generateFoldingSofaId = async (): Promise<string> => {
  const currentId =
    (await findLastFoldingSofaId()) || (0).toString().padStart(6, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(6, '0');
  incrementedId = `F-${incrementedId}`;

  return incrementedId;
};
