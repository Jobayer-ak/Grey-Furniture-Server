import { Model, Types } from 'mongoose';

export type IProduct = {
  id: string;
  chair: Types.ObjectId;
  desk?: Types.ObjectId;
  sofa?: Types.ObjectId;
  storage?: Types.ObjectId;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
