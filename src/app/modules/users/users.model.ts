import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './users.interface';
import config from '../../../config';
import bcrypt from 'bcrypt';

export const userSchema = new Schema<IUser, Record<string, never>>(
  {
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
    },
    mobile: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
