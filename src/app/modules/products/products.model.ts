import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './products.interface';

const productSchema = new Schema<IProduct, Record<string, never>>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  chair: {
    type: Schema.Types.ObjectId,
    ref: 'Chair',
  },
  desk: {
    type: Schema.Types.ObjectId,
    ref: 'Desk',
  },
  sofa: {
    type: Schema.Types.ObjectId,
    ref: 'Sofa',
  },
  storage: {
    type: Schema.Types.ObjectId,
    ref: 'Storage',
  },
});

export const Product = model<IProduct, ProductModel>('Product', productSchema);
