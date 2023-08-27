import { SortOrder } from 'mongoose';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { Table } from './table.model';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { tableSearchableFields } from './table.constants';
import { ITable, ITableFilters } from './table.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IGenericResponse } from '../../../interfaces/common';

const getAllTableService = async (
  filters: ITableFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<ITable[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: tableSearchableFields.map(field => ({
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

  const result = await Table.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Table.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleTableService = async (id: string): Promise<ITable | null> => {
  const result = await Table.findById(id);
  return result;
};

const updateTableService = async (
  id: string,
  payload: Partial<ITable>,
): Promise<ITable | null> => {
  const isExist = await Table.findOne({ id });

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Table not found!');
  }

  const result = await Table.findOneAndUpdate({ id }, payload, { new: true });
  return result;
};

export const TableService = {
  getAllTableService,
  getSingleTableService,
  updateTableService,
};
