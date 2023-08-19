import { Model } from 'mongoose';

export type IChair = {
  id: string;
  model: string;
  price: number;
  material: 'Fabric' | 'Leather';
  color: 'Black' | 'White' | 'Red' | 'Grey';
  style: 'Without Headrest' | 'With Headrest';
  inStock: boolean;
  soldOut: boolean;
  manufacturer: string;
  description: string;
  type: 'Gaming' | 'Office';
};

export type ChairModel = Model<IChair, Record<string, unknown>>;
