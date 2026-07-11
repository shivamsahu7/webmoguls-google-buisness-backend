import { t } from 'elysia';

export const loginDto = t.Object({
  email: t.String({ format: 'email', default: '' }),
  password: t.String({ minLength: 1 }),
});

export const registerDto = t.Object({
  name: t.String({ minLength: 1, maxLength: 255 }),
  email: t.String({ format: 'email', maxLength: 255, default: '' }),
  password: t.String({ minLength: 8, maxLength: 255 }),
});
