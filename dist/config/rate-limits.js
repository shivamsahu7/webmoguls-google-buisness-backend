import { throttle } from '../middleware/throttle.js';
/**
 * Pre-configured rate limit presets.
 * Modules simply `.use()` the preset they need — no config duplication.
 *
 * Usage: .use(rateLimits.strict)
 */
export const rateLimits = {
    /** 1 request per minute — for form submissions (contact us, etc.) */
    strict: throttle({
        maxRequests: 1,
        windowMs: 60 * 1000,
        message: 'Too many submissions. Please wait 1 minute before trying again.',
    }),
    /** 10 requests per minute — for auth endpoints (login, register) */
    auth: throttle({
        maxRequests: 10,
        windowMs: 60 * 1000,
        message: 'Too many authentication attempts. Please wait and try again.',
    }),
    /** 60 requests per minute — general API usage */
    standard: throttle({
        maxRequests: 60,
        windowMs: 60 * 1000,
        message: 'Rate limit exceeded. Please slow down.',
    }),
};
//# sourceMappingURL=rate-limits.js.map