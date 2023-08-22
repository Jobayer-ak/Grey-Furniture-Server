import mongoose from 'mongoose';
import { IChair } from '../chair/chair.interface';
import { IProduct } from './products.interface';
import {
  generateElevatingTableId,
  generateGamingChairId,
  generateNormalTableId,
  generateOfficeChairId,
} from './products.utils';
import { Chair } from '../chair/chair.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { Product } from './products.model';
import { ITable } from '../table/table.interface';
import { Table } from '../table/table.model';

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

// const createttTableService = async (
//   table: ITable,
//   givenProductData: IProduct,
// ): Promise<IProduct | null> => {
//   givenProductData.productName = 'Table';

//   console.log('Table: ', table);

//   // session
//   let tableData = null;

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     const productId =
//       table.type === 'Normal'
//         ? await generateNormalTableId()
//         : await generateElevatingTableId();

//     givenProductData.id = productId;
//     table.id = productId;

//     console.log('product: ', givenProductData);

//     const newTable = await Table.create([table], { session });

//     if (!newTable.length) {
//       throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Table!');
//     }

//     givenProductData.table = newTable[0]._id;

//     const newProduct = await Product.create([givenProductData], { session });

//     if (!newProduct.length) {
//       throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create product!');
//     }

//     tableData = newProduct[0];

//     console.log('table data: ', tableData);

//     await session.commitTransaction();
//     await session.endSession();
//   } catch (error) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw new Error();
//   }

//   if (tableData) {
//     tableData = await Product.findOne({ id: tableData.id }).populate({
//       path: 'table',
//     });
//   }

//   return tableData;
// };

export const ProductService = { createChairService, createTableService };
