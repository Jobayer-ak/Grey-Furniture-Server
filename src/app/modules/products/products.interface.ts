import { Model, Types } from 'mongoose';

export type IProduct = {
  id: string | undefined;
  productName: string | null;
  chair?: Types.ObjectId;
  table?: Types.ObjectId;
  sofa?: Types.ObjectId;
  storage?: Types.ObjectId;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
