import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { loggerMiddleware } from './middleware/logger.js';
import { usersRouter } from './modules/users/index.js';
import { authRouter } from './modules/auth/index.js';
import { contactUsRouter } from './modules/contact-us/index.js';
import { success } from './shared/utils/response.js';

export const app = express();
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: env.NODE_ENV === 'development'
      ? true
      : env.CORS_ORIGIN.split(',').map((o) => o.trim()),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Global logger
app.use(loggerMiddleware);

// Root Welcome Page
app.get('/', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
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
        <p>The backend services are fully operational on Express.js.</p>
      </div>
    </body>
    </html>
  `);
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json(success({ status: 'healthy', uptime: process.uptime() }));
});

// Feature modules
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/contact-us', contactUsRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('🔥 Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});
