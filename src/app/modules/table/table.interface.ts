import { Model } from 'mongoose';

type ITableSize = {
  compact: number;
  standard: number;
  executive: number;
  extended: number;
};

export type ITable = {
  id?: string;
  model: string;
  price: string;
  size: ITableSize;
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
