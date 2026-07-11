import { Router } from 'express';
import { db } from '../../db/index.js';
import { UserService } from './service.js';
import { createUserDto, updateUserDto, userIdParam } from './dto.js';
import { success, error } from '../../shared/utils/response.js';
import { validate } from '../../shared/utils/validate.js';

export const usersRouter = Router();
const userService = new UserService(db);

// GET /users
usersRouter.get('/', async (req, res) => {
  const users = await userService.findAll();
  res.json(success(users, 'Users retrieved successfully'));
});

// GET /users/:id
usersRouter.get(
  '/:id',
  validate(userIdParam),
  async (req, res) => {
    const user = await userService.findById(Number(req.params.id));
    if (!user) {
      res.status(404).json(error('User not found'));
      return;
    }
    res.json(success(user));
  }
);

// POST /users
usersRouter.post(
  '/',
  validate(createUserDto),
  async (req, res) => {
    const existing = await userService.findByEmail(req.body.email);
    if (existing) {
      res.status(409).json(error('Email already exists'));
      return;
    }
    const user = await userService.create(req.body);
    res.status(201).json(success(user, 'User created successfully'));
  }
);

// PUT /users/:id
usersRouter.put(
  '/:id',
  validate(userIdParam),
  validate(updateUserDto),
  async (req, res) => {
    const user = await userService.update(Number(req.params.id), req.body);
    if (!user) {
      res.status(404).json(error('User not found'));
      return;
    }
    res.json(success(user, 'User updated successfully'));
  }
);

// DELETE /users/:id
usersRouter.delete(
  '/:id',
  validate(userIdParam),
  async (req, res) => {
    const user = await userService.delete(Number(req.params.id));
    if (!user) {
      res.status(404).json(error('User not found'));
      return;
    }
    res.json(success(user, 'User deleted successfully'));
  }
);
