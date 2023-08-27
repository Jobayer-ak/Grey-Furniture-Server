import { z } from 'zod';

const updateSofaZodSchema = z.object({
  body: z.object({
    model: z.string().optional(),
    price: z.string().optional(),
    inStock: z.boolean().optional(),
    soldOut: z.boolean().optional(),
    quantity: z.number().optional(),
    material: z.string().optional(),
    manufacturer: z.string().optional(),
    description: z.string().optional(),
    size: z
      .object({
        singleSeater: z.number().optional(),
        doubleSeater: z.number().optional(),
        trippleSeater: z.number().optional(),
      })
      .optional(),
    color: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const SofaValidation = {
  updateSofaZodSchema,
};
