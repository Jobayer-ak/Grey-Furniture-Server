import { Schema, model } from 'mongoose';
import { tableType } from './table.constants';
import { ITable, TableModel } from './table.interface';

const tableSchema = new Schema<ITable, Record<string, never>>(
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
    size: {
      required: true,
      type: {
        compact: {
          type: Number,
          min: 0,
        },
        standard: {
          type: Number,
          min: 0,
        },
        executive: {
          type: Number,
          min: 0,
        },
        extended: {
          type: Number,
          min: 0,
        },
      },
    },
    color: {
      type: [String],
      required: true,
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
      enum: tableType,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

export const Table = model<ITable, TableModel>('Table', tableSchema);
