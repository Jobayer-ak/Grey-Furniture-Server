import { z } from 'zod';
import {
  chairColor,
  chairMaterial,
  chairStyle,
  chairType,
} from '../chair/chair.constant';
import { sofaMaterial, sofaType } from '../sofa/sofa.constants';

export const createChairZodSchema = z.object({
  body: z.object({
    chair: z.object({
      model: z.string({ required_error: 'Chair Model is required!' }),
      price: z.string({ required_error: 'Price is required!' }),
      inStock: z.boolean().optional(),
      soldOut: z.boolean().optional(),
      manufacturer: z.string({ required_error: 'Manufacturer is required!' }),
      description: z.string({ required_error: 'Description is required!' }),
      material: z.enum([...chairMaterial] as [string, ...string[]], {
        required_error: 'ChairMaterial is required!',
      }),
      color: z.enum([...chairColor] as [string, ...string[]], {
        required_error: 'ChairColor is required!',
      }),
      style: z.enum([...chairStyle] as [string, ...string[]], {
        required_error: 'ChairStyle is required!',
      }),

      type: z.enum([...chairType] as [string, ...string[]], {
        required_error: 'ChairType is required!',
      }),
      images: z.array(z.string({ required_error: 'Images are required!' })),
    }),
  }),
});

export const createTableZodSchema = z.object({
  body: z.object({
    table: z.object({
      model: z.string({ required_error: 'Table Model is required!' }),
      price: z.string({ required_error: 'Price is required!' }),
      color: z.array(z.string({ required_error: 'Color is requried!' })),
      inStock: z.boolean().optional(),
      soldOut: z.boolean().optional(),
      manufacturer: z.string({ required_error: 'Manufacturer is required!' }),
      description: z.string({ required_error: 'Description is required!' }),
      size: z.object({
        compact: z.number().optional(),
        standard: z.number().optional(),
        executive: z.number().optional(),
        extended: z.number().optional(),
      }),
      images: z.array(z.string({ required_error: 'Images are required!' })),
    }),
  }),
});

export const createSofaZodSchema = z.object({
  body: z.object({
    sofa: z.object({
      model: z.string({ required_error: 'Sofa Model is required!' }),
      price: z.string({ required_error: 'Price is required!' }),
      color: z.array(z.string({ required_error: 'Color is requried!' })),
      material: z.enum([...sofaMaterial] as [string, ...string[]], {
        required_error: 'Sofa Material is required!',
      }),
      inStock: z.boolean().optional(),
      soldOut: z.boolean().optional(),
      manufacturer: z.string({ required_error: 'Manufacturer is required!' }),
      description: z.string({ required_error: 'Description is required!' }),
      size: z.object({
        singleSeater: z.number({}).optional(),
        doubleleSeater: z.number({}).optional(),
        trippleSeater: z.number({}).optional(),
      }),
      type: z.enum([...sofaType] as [string, ...string[]], {
        required_error: 'Sofa Type is required!',
      }),
      images: z.array(z.string({ required_error: 'Images are required!' })),
    }),
  }),
});
