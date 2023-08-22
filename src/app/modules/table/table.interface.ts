import { Model } from 'mongoose';

export type ITable = {
  id?: string;
  model: string;
  price: string;
  color: string;
  inStock?: boolean;
  soldOut?: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  type: 'Elevating' | 'Normal';
  images: string[];
};

export type TableModel = Model<ITable, Record<string, unknown>>;
