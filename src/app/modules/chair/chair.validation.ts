import { z } from 'zod';
import {
  chairColor,
  chairMaterial,
  chairStyle,
  chairType,
} from './chair.constant';

const updateChairZodSchema = z.object({
  body: z.object({
    model: z.string().optional(),
    price: z.string().optional(),
    inStock: z.boolean().optional(),
    soldOut: z.boolean().optional(),
    manufacturer: z.string().optional(),
    description: z.string().optional(),
    material: z.enum([...chairMaterial] as [string, ...string[]]).optional(),
    color: z.enum([...chairColor] as [string, ...string[]]).optional(),
    style: z.enum([...chairStyle] as [string, ...string[]]).optional(),
    type: z.enum([...chairType] as [string, ...string[]]).optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const ChairValidation = {
  updateChairZodSchema,
};
