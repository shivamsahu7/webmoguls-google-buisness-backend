import { Elysia } from 'elysia';
import { dbPlugin } from '../../plugins/db.js';
import { AuthService } from './service.js';
import { loginDto, registerDto } from './dto.js';
import { success, error } from '../../shared/utils/response.js';
import { MESSAGES } from '../../shared/constants/messages.js';
export const authModule = new Elysia({ prefix: '/auth' })
    .use(dbPlugin)
    .derive(({ db }) => {
    return { authService: new AuthService(db) };
})
    // POST /auth/login
    .post('/login', async ({ authService, body, set }) => {
    const user = await authService.login(body.email, body.password);
    if (!user) {
        set.status = 401;
        return error(MESSAGES.AUTH_INVALID_CREDENTIALS);
    }
    // TODO: Generate and return JWT token
    return success({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token: 'TODO: implement JWT',
    }, MESSAGES.AUTH_LOGIN_SUCCESS);
}, { body: loginDto })
    // POST /auth/register
    .post('/register', async ({ authService, body, set }) => {
    const user = await authService.register(body);
    if (!user) {
        set.status = 409;
        return error(MESSAGES.AUTH_EMAIL_EXISTS);
    }
    set.status = 201;
    return success({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    }, MESSAGES.AUTH_REGISTER_SUCCESS);
}, { body: registerDto });
//# sourceMappingURL=index.js.map