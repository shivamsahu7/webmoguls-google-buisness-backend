import rateLimit from 'express-rate-limit';

export const rateLimits = {
  strict: rateLimit({
    windowMs: 60 * 1000,
    max: 1,
    message: { success: false, error: 'Too many submissions. Please wait 1 minute before trying again.' },
    standardHeaders: true,
    legacyHeaders: false,
  }),
  auth: rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: { success: false, error: 'Too many authentication attempts. Please wait and try again.' },
    standardHeaders: true,
    legacyHeaders: false,
  }),
  standard: rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    message: { success: false, error: 'Rate limit exceeded. Please slow down.' },
    standardHeaders: true,
    legacyHeaders: false,
  }),
};
