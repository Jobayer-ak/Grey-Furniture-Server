import { z } from 'zod';

const updateTableZodSchema = z.object({
  body: z.object({
    model: z.string().optional(),
    price: z.string().optional(),
    inStock: z.boolean().optional(),
    soldOut: z.boolean().optional(),
    quantity: z.number().optional(),
    manufacturer: z.string().optional(),
    description: z.string().optional(),
    size: z
      .object({
        compact: z.number().optional(),
        standard: z.number().optional(),
        executive: z.number().optional(),
        extended: z.number().optional(),
      })
      .optional(),
    color: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const TableValidation = {
  updateTableZodSchema,
};
