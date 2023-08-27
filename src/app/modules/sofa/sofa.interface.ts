import { Model } from 'mongoose';

type sofaSizes = {
  singleSeater: number;
  doubleSeater: number;
  trippleSeater: number;
};

export type ISofa = {
  id?: string;
  model: string;
  price: string;
  color: string[];
  size: sofaSizes;
  material: 'PU Leather' | 'Soft Fabric';
  inStock?: boolean;
  soldOut?: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  type: 'Normal' | 'Folding';
  images: string[];
};

export type SofaModel = Model<ISofa, Record<string, unknown>>;

export type ISofaFilters = {
  searchTerm?: string;
  id?: string;
  model?: string;
  price?: string;
  color?: string;
  type?: string;
  manufacturer?: string;
};
