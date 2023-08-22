import { Model } from 'mongoose';

export type ISofa = {
  id?: string;
  model: string;
  price: string;
  color: string[];
  size: 'Single Seater' | 'Double Seater' | 'Triple Seawter';
  inStock?: boolean;
  soldOut?: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  type: 'Elevating' | 'Normal';
  images: string[];
};

export type TableModel = Model<ISofa, Record<string, unknown>>;
