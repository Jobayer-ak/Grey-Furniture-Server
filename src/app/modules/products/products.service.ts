import mongoose from 'mongoose';
import { IChair } from '../chair/chair.interface';
import { IProduct } from './products.interface';
import {
  generateElevatingTableId,
  generateFoldingSofaId,
  generateGamingChairId,
  generateNormalSofalId,
  generateNormalTableId,
  generateOfficeChairId,
} from './products.utils';
import { Chair } from '../chair/chair.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { Product } from './products.model';
import { ITable } from '../table/table.interface';
import { Table } from '../table/table.model';
import { Sofa } from '../sofa/sofa.model';
import { ISofa } from '../sofa/sofa.interface';

const createChairService = async (
  chair: IChair,
  product: IProduct,
): Promise<IProduct | null> => {
  // set product name;
  product.productName = 'Chair';

  // transaction
  let productData = null;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const productId =
      chair.type === 'Gaming'
        ? await generateGamingChairId()
        : await generateOfficeChairId();

    product.id = productId;
    chair.id = productId;

    // array
    const newChair = await Chair.create([chair], { session });

    if (!newChair.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create chair!');
    }

    // referencing  chair _id to product
    product.chair = newChair[0]._id;

    const newProduct = await Product.create([product], { session }); // for using transaction it is array instead of obj

    if (!newProduct.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create product');
    }

    productData = newProduct[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (productData) {
    productData = await Product.findOne({ id: productData.id }).populate({
      path: 'chair',
    });
  }

  return productData;
};

const createTableService = async (
  table: ITable,
  product: IProduct,
): Promise<IProduct | null> => {
  // set product name;
  product.productName = 'Table';

  // transaction
  let productData = null;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const productId =
      table.type === 'Elevating'
        ? await generateElevatingTableId()
        : await generateNormalTableId();

    table.id = productId;
    product.id = productId;

    // array
    const newTable = await Table.create([table], { session });

    if (!newTable.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Table!');
    }

    // referencing  chair _id to product
    product.table = newTable[0]._id;

    const newProduct = await Product.create([product], { session }); // for using transaction it is array instead of obj

    if (!newProduct.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create product');
    }

    productData = newProduct[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (productData) {
    productData = await Product.findOne({ id: productData.id }).populate({
      path: 'table',
    });
  }

  return productData;
};

const createSofaService = async (
  sofa: ISofa,
  product: IProduct,
): Promise<IProduct | null> => {
  // set product name;
  product.productName = 'Sofa';

  // transaction
  let productData = null;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const productId =
      sofa.type === 'Normal'
        ? await generateNormalSofalId()
        : await generateFoldingSofaId();

    sofa.id = productId;
    product.id = productId;

    // array
    const newSofa = await Sofa.create([sofa], { session });

    if (!newSofa.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Sofa!');
    }

    // referencing  chair _id to product
    product.sofa = newSofa[0]._id;

    const newProduct = await Product.create([product], { session }); // for using transaction it is array instead of obj

    if (!newProduct.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create product');
    }

    productData = newProduct[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (productData) {
    productData = await Product.findOne({ id: productData.id }).populate({
      path: 'sofa',
    });
  }

  return productData;
};

export const ProductService = {
  createChairService,
  createTableService,
  createSofaService,
};
