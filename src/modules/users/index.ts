import { Elysia } from 'elysia';
import { dbPlugin } from '../../plugins/db.js';
import { UserService } from './service.js';
import { createUserDto, updateUserDto, userIdParam } from './dto.js';
import { success, error } from '../../shared/utils/response.js';

export const usersModule = new Elysia({ prefix: '/users' })
  .use(dbPlugin)
  .derive(({ db }) => {
    return { userService: new UserService(db) };
  })

  // GET /users — List all users
  .get('/', async ({ userService }) => {
    const users = await userService.findAll();
    return success(users, 'Users retrieved successfully');
  })

  // GET /users/:id — Get user by ID
  .get(
    '/:id',
    async ({ userService, params, set }) => {
      const user = await userService.findById(params.id);
      if (!user) {
        set.status = 404;
        return error('User not found');
      }
      return success(user);
    },
    { params: userIdParam }
  )

  // POST /users — Create new user
  .post(
    '/',
    async ({ userService, body, set }) => {
      const existing = await userService.findByEmail(body.email);
      if (existing) {
        set.status = 409;
        return error('Email already exists');
      }
      const user = await userService.create(body);
      set.status = 201;
      return success(user, 'User created successfully');
    },
    { body: createUserDto }
  )

  // PUT /users/:id — Update user
  .put(
    '/:id',
    async ({ userService, params, body, set }) => {
      const user = await userService.update(params.id, body);
      if (!user) {
        set.status = 404;
        return error('User not found');
      }
      return success(user, 'User updated successfully');
    },
    { params: userIdParam, body: updateUserDto }
  )

  // DELETE /users/:id — Delete user
  .delete(
    '/:id',
    async ({ userService, params, set }) => {
      const user = await userService.delete(params.id);
      if (!user) {
        set.status = 404;
        return error('User not found');
      }
      return success(user, 'User deleted successfully');
    },
    { params: userIdParam }
  );
