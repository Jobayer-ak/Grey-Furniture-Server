import { Schema } from 'mongoose';
import { tableType } from './table.constants';
import { ITable, TableModel } from './table.interface';
import { model } from 'mongoose';

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

    color: {
      type: String,
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
