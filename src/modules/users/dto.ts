import { z } from 'zod';

export const createUserDto = z.object({
  body: z.object({
    name: z.string().min(1).max(255),
    email: z.string().email().max(255),
    password: z.string().min(8).max(255),
  }),
});

export const updateUserDto = z.object({
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    email: z.string().email().max(255).optional(),
    isActive: z.boolean().optional(),
  }),
});

export const userIdParam = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});
