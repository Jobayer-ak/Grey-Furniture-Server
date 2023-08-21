import mongoose from 'mongoose';
import { IChair } from '../chair/chair.interface';
import { IProduct } from './products.interface';
import { generateGamingChairId, generateOfficeChairId } from './products.utils';
import { Chair } from '../chair/chair.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { Product } from './products.model';

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

export const ProductService = { createChairService };
