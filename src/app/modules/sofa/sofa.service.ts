import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { sofaSearchableFields } from './sofa.constants';
import { ISofa, ISofaFilters } from './sofa.interface';
import { Sofa } from './sofa.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllSofaService = async (
  filters: ISofaFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<ISofa[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: sofaSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Sofa.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Sofa.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleSofaService = async (id: string): Promise<ISofa | null> => {
  const result = await Sofa.findById(id);
  return result;
};

const updateSofaService = async (
  id: string,
  payload: Partial<ISofa>,
): Promise<ISofa | null> => {
  const isExist = await Sofa.findOne({ id });

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Sofa not found!');
  }

  const result = await Sofa.findOneAndUpdate({ id }, payload, { new: true });
  return result;
};

export const SofaService = {
  getAllSofaService,
  getSingleSofaService,
  updateSofaService,
};
