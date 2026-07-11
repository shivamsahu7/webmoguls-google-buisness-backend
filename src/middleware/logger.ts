import { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const url = req.originalUrl;
  console.log(`➡️  ${req.method} ${url} — ${new Date().toISOString()}`);
  
  res.on('finish', () => {
    console.log(`⬅️  ${req.method} ${url} — ${res.statusCode}`);
  });
  
  next();
};
