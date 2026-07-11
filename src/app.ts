import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { env } from './config/env.js';
import { loggerMiddleware } from './middleware/logger.js';
import { usersModule } from './modules/users/index.js';
import { authModule } from './modules/auth/index.js';
import { contactUsModule } from './modules/contact-us/index.js';
import { success } from './shared/utils/response.js';
import { MESSAGES } from './shared/constants/messages.js';

export const app = new Elysia({ adapter: node() })
  // CORS — restricted to production origin
  .use(
    cors({
      origin: env.NODE_ENV === 'development'
        ? true
        : env.CORS_ORIGIN,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  )

  // Swagger / OpenAPI documentation
  .use(
    swagger({
      path: '/docs',
      documentation: {
        info: {
          title: 'WebMoguls Google Business API',
          version: '1.0.0',
          description: 'Backend API for WebMoguls Google Business Platform',
        },
        tags: [
          { name: 'Health', description: 'Server health endpoints' },
          { name: 'Auth', description: 'Authentication endpoints' },
          { name: 'Users', description: 'User management endpoints' },
          { name: 'Contact Us', description: 'Contact form submission' },
        ],
      },
    })
  )

  // Global middleware
  .use(loggerMiddleware)

  // Global error handler
  .onError(({ error, code, set }) => {
    if (code === 'VALIDATION') {
      set.status = 422;
      
      let cleanDetails: any = error.message;
      try {
        const parsed = JSON.parse(error.message);
        if (parsed && Array.isArray(parsed.errors)) {
          cleanDetails = parsed.errors.map((err: any) => ({
            field: err.path.replace(/^\//, ''),
            message: err.message
          }));
        }
      } catch {
        // Fallback to the raw string if parsing fails
      }

      return {
        success: false,
        error: MESSAGES.VALIDATION_FAILED,
        details: cleanDetails,
      };
    }

    if (code === 'NOT_FOUND') {
      set.status = 404;
      return { success: false, error: 'Route not found' };
    }

    console.error('🔥 Unhandled error:', error);
    set.status = 500;
    return { success: false, error: 'Internal server error' };
  })

  // Health check
  .get('/', () => success({ status: 'healthy', uptime: process.uptime() }, 'Server is running'), {
    detail: { summary: 'Root Health Check', tags: ['Health'] },
  })
  .get('/health', () => success({ status: 'healthy', uptime: process.uptime() }), {
    detail: { summary: 'Health Check', tags: ['Health'] },
  })

  // Feature modules
  .use(authModule)
  .use(usersModule)
  .use(contactUsModule);
