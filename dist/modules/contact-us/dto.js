import { t } from 'elysia';
export const createContactDto = t.Object({
    fullName: t.String({ minLength: 1, maxLength: 255 }),
    businessEmail: t.String({ format: 'email', maxLength: 255, default: '' }),
    businessName: t.String({ minLength: 1, maxLength: 255 }),
    website: t.Optional(t.String({ maxLength: 500 })),
    tellUsAbout: t.Optional(t.String({ maxLength: 5000 })),
});
//# sourceMappingURL=dto.js.map