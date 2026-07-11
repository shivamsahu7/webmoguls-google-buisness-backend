import { z } from 'zod';

export const createContactDto = z.object({
  body: z.object({
    fullName: z.string().min(1).max(255),
    businessEmail: z.string().email().max(255),
    businessName: z.string().min(1).max(255),
    website: z.string().max(500).optional(),
    tellUsAbout: z.string().max(5000).optional(),
  }),
});
