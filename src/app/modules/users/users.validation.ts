import { z } from 'zod';
import { gender, role } from './users.constants';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({ required_error: 'First Name is required!' }),
      lastName: z.string({ required_error: 'Last Name is required!' }),
    }),
    gender: z.enum([...gender] as [string, ...string[]], {
      required_error: 'Gender is required!',
    }),
    role: z.enum([...role] as [string, ...string[]], {
      required_error: 'Role is required!',
    }),
  }),
});

export default createUserZodSchema;
