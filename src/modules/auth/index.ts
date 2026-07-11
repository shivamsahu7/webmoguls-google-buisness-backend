import { Router } from 'express';
import { db } from '../../db/index.js';
import { AuthService } from './service.js';
import { loginDto, registerDto } from './dto.js';
import { success, error } from '../../shared/utils/response.js';
import { MESSAGES } from '../../shared/constants/messages.js';
import { validate } from '../../shared/utils/validate.js';

export const authRouter = Router();
const authService = new AuthService(db);

// POST /auth/login
authRouter.post(
  '/login',
  validate(loginDto),
  async (req, res) => {
    const user = await authService.login(req.body.email, req.body.password);
    if (!user) {
      res.status(401).json(error(MESSAGES.AUTH_INVALID_CREDENTIALS));
      return;
    }

    res.json(success(
      {
        user: { id: user.id, name: user.name, email: user.email },
        token: 'TODO: implement JWT',
      },
      MESSAGES.AUTH_LOGIN_SUCCESS
    ));
  }
);

// POST /auth/register
authRouter.post(
  '/register',
  validate(registerDto),
  async (req, res) => {
    const user = await authService.register(req.body);
    if (!user) {
      res.status(409).json(error(MESSAGES.AUTH_EMAIL_EXISTS));
      return;
    }

    res.status(201).json(success(
      {
        user: { id: user.id, name: user.name, email: user.email },
      },
      MESSAGES.AUTH_REGISTER_SUCCESS
    ));
  }
);
