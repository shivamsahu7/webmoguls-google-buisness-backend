import { z } from 'zod';
export const loginDto = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(1),
    }),
});
export const registerDto = z.object({
    body: z.object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(255),
        password: z.string().min(8).max(255),
    }),
});
//# sourceMappingURL=dto.js.map