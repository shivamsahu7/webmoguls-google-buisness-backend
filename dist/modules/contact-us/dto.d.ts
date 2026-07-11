import { z } from 'zod';
export declare const createContactDto: z.ZodObject<{
    body: z.ZodObject<{
        fullName: z.ZodString;
        businessEmail: z.ZodString;
        businessName: z.ZodString;
        website: z.ZodOptional<z.ZodString>;
        tellUsAbout: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=dto.d.ts.map