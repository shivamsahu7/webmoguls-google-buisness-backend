import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { MESSAGES } from '../constants/messages.js';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        const zodError = error as any;
        const cleanDetails = zodError.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        res.status(422).json({
          success: false,
          error: MESSAGES.VALIDATION_FAILED,
          details: cleanDetails,
        });
        return;
      }
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  };
};
