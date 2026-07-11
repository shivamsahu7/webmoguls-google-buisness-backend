import { Elysia } from 'elysia';
import { db } from '../db/index.js';

export const dbPlugin = new Elysia({ name: 'db' }).decorate('db', db);
