import { Model } from 'mongoose';

export type ITable = {
  id?: string;
  model: string;
  price: string;
  size: '48”W x 24”D x 30”H' | '60”W x 24”D x 30”H';
  color: string[];
  inStock?: boolean;
  soldOut?: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  type: 'Elevating' | 'Normal';
  images: string[];
};

export type TableModel = Model<ITable, Record<string, unknown>>;

export type ITableFilters = {
  searchTerm?: string;
  id?: string;
  model?: string;
  price?: string;
  color?: string;
  type?: string;
  manufacturer?: string;
};
