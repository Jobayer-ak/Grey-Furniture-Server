import { Schema, model } from 'mongoose';
import { ChairModel, IChair } from './chair.interface';
import { chairColor, chairMaterial, chairStyle } from './chair.constant';

const chairSchema = new Schema<IChair, Record<string, never>>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  model: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    unique: true,
  },
  material: {
    type: String,
    enum: chairMaterial,
    required: true,
  },
  color: {
    type: String,
    enum: chairColor,
    required: true,
  },
  style: {
    type: String,
    enum: chairStyle,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  soldOut: {
    type: Boolean,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Chair = model<IChair, ChairModel>('Chair', chairSchema);
