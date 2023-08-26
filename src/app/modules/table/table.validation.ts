import { z } from 'zod';

import { tableSize } from './table.constants';

const updateTableZodSchema = z.object({
  body: z.object({
    model: z.string().optional(),
    price: z.string().optional(),
    inStock: z.boolean().optional(),
    soldOut: z.boolean().optional(),
    quantity: z.number().optional(),
    manufacturer: z.string().optional(),
    description: z.string().optional(),
    size: z.enum([...tableSize] as [string, ...string[]]).optional(),
    color: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const TableValidation = {
  updateTableZodSchema,
};
