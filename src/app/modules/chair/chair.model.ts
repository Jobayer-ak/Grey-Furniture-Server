import { Schema, model } from 'mongoose';
import { ChairModel, IChair } from './chair.interface';
import {
  chairColor,
  chairMaterial,
  chairStyle,
  chairType,
} from './chair.constant';

const chairSchema = new Schema<IChair, Record<string, never>>(
  {
    id: {
      type: String,
      unique: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
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
      default: true,
    },
    soldOut: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
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
    type: {
      type: String,
      enum: chairType,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

export const Chair = model<IChair, ChairModel>('Chair', chairSchema);
