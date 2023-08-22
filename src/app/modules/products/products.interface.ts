import { Model, Types } from 'mongoose';

export type IProduct = {
  id: string;
  productName: string;
  chair?: Types.ObjectId;
  table?: Types.ObjectId;
  sofa?: Types.ObjectId;
  storage?: Types.ObjectId;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
