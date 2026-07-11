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
    .use(cors({
    origin: env.NODE_ENV === 'development'
        ? true
        : env.CORS_ORIGIN.split(',').map((o) => o.trim()),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))
    // Swagger / OpenAPI documentation
    .use(swagger({
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
}))
    // Global middleware
    .use(loggerMiddleware)
    // Global error handler
    .onError(({ error, code, set }) => {
    if (code === 'VALIDATION') {
        set.status = 422;
        let cleanDetails = error.message;
        try {
            const parsed = JSON.parse(error.message);
            if (parsed && Array.isArray(parsed.errors)) {
                cleanDetails = parsed.errors.map((err) => ({
                    field: err.path.replace(/^\//, ''),
                    message: err.message
                }));
            }
        }
        catch {
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
    // Root Welcome Page
    .get('/', ({ set }) => {
    set.headers['Content-Type'] = 'text/html';
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WebMoguls API</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #0f172a; color: #f8fafc; }
          .container { text-align: center; padding: 2rem; border-radius: 1rem; background-color: #1e293b; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
          h1 { color: #38bdf8; margin-top: 0; }
          p { color: #94a3b8; }
          a { display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 0.5rem; transition: background-color 0.2s; }
          a:hover { background-color: #2563eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 WebMoguls API is running!</h1>
          <p>The backend services are fully operational.</p>
          <a href="/docs">View API Documentation</a>
        </div>
      </body>
      </html>
    `;
}, {
    detail: { summary: 'Root Welcome Page', tags: ['Health'] },
})
    .get('/health', () => success({ status: 'healthy', uptime: process.uptime() }), {
    detail: { summary: 'Health Check', tags: ['Health'] },
})
    // Feature modules
    .use(authModule)
    .use(usersModule)
    .use(contactUsModule);
//# sourceMappingURL=app.js.map