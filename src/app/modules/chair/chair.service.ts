import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { chairSearchableFields } from './chair.constant';
import { IChair, IChairFilters } from './chair.interface';
import { Chair } from './chair.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllChairService = async (
  filters: IChairFilters,
  pagiantionOptions: IPaginationOptions,
): Promise<IGenericResponse<IChair[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: chairSearchableFields.map(field => ({
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
    paginationHelpers.calculatePagination(pagiantionOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Chair.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Chair.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleChairService = async (id: string): Promise<IChair | null> => {
  const result = await Chair.findById(id);
  return result;
};

const updateChairService = async (
  id: string,
  payload: Partial<IChair>,
): Promise<IChair | null> => {
  const isExist = await Chair.findOne({ id });

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Chair not found!');
  }

  const result = await Chair.findOneAndUpdate({ id }, payload, { new: true });
  return result;
};

export const ChairService = {
  getAllChairService,
  getSingleChairService,
  updateChairService,
};
