import { Model } from 'mongoose';

export type ISofa = {
  id?: string;
  model: string;
  price: string;
  color: string[];
  size: 'Single Seater' | 'Double Seater' | 'Tripple Seater';
  material: 'PU Leather' | 'Soft Fabric ';
  inStock?: boolean;
  soldOut?: boolean;
  quantity: number;
  manufacturer: string;
  description: string;
  type: 'Normal' | 'Folding';
  images: string[];
};

export type SofaModel = Model<ISofa, Record<string, unknown>>;
