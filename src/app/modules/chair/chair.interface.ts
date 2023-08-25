import { Model } from 'mongoose';

export type IChair = {
  id?: string;
  model: string;
  price: string;
  material: 'Fabric' | 'Leather';
  color: 'Black' | 'White' | 'Red' | 'Grey';
  style: 'Without Headrest' | 'With Headrest';
  inStock?: boolean;
  soldOut?: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  type: 'Gaming' | 'Office';
  images: string[];
};

export type ChairModel = Model<IChair, Record<string, unknown>>;

export type IChairFilters = {
  searchTerm?: string;
  id?: string;
  model?: string;
  price?: string;
  color?: string;
  type?: string;
  style?: string;
};
