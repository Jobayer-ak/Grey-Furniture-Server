import { Schema, model } from 'mongoose';
import { sofaMaterial, sofaType } from './sofa.constants';
import { ISofa, SofaModel } from './sofa.interface';

const sofaSchema = new Schema<ISofa, Record<string, never>>(
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

    color: {
      type: [String],
      required: true,
    },
    size: {
      required: true,
      type: {
        singleSeater: {
          type: Number,
          min: 0,
        },
        doubleSeater: {
          type: Number,
          min: 0,
        },
        trippleSeater: {
          type: Number,
          min: 0,
        },
      },
    },
    material: {
      type: String,
      enum: sofaMaterial,
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
      enum: sofaType,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

export const Sofa = model<ISofa, SofaModel>('Sofa', sofaSchema);
