import { t } from 'elysia';
export const createUserDto = t.Object({
    name: t.String({ minLength: 1, maxLength: 255 }),
    email: t.String({ format: 'email', maxLength: 255, default: '' }),
    password: t.String({ minLength: 8, maxLength: 255 }),
});
export const updateUserDto = t.Object({
    name: t.Optional(t.String({ minLength: 1, maxLength: 255 })),
    email: t.Optional(t.String({ format: 'email', maxLength: 255, default: '' })),
    isActive: t.Optional(t.Boolean()),
});
export const userIdParam = t.Object({
    id: t.Numeric(),
});
//# sourceMappingURL=dto.js.map