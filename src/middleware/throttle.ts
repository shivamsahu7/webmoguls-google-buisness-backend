import { Elysia } from 'elysia';

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface ThrottleOptions {
  /** Max requests allowed within the window */
  maxRequests: number;
  /** Window duration in milliseconds */
  windowMs: number;
  /** Custom message when rate limited */
  message?: string;
}

/**
 * Creates a reusable rate limiter plugin for Elysia.
 * Uses in-memory store with automatic cleanup — suitable for single-instance deployments.
 * For multi-instance/horizontal scaling, swap to Redis-backed store.
 */
export function throttle(options: ThrottleOptions) {
  const { maxRequests, windowMs, message = 'Too many requests. Please try again later.' } = options;
  const store = new Map<string, RateLimitEntry>();

  // Periodic cleanup of expired entries to prevent memory leaks
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      if (now >= entry.resetAt) {
        store.delete(key);
      }
    }
  }, windowMs);

  // Allow GC to clean up if the process is shutting down
  if (cleanupInterval.unref) {
    cleanupInterval.unref();
  }

  return new Elysia({ name: `throttle-${windowMs}ms` })
    .onBeforeHandle(({ request, set }) => {
      const forwarded = request.headers.get('x-forwarded-for');
      const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown';
      const now = Date.now();

      let entry = store.get(ip);

      if (!entry || now >= entry.resetAt) {
        entry = { count: 1, resetAt: now + windowMs };
        store.set(ip, entry);
      } else {
        entry.count++;
      }

      // Set rate-limit headers
      const remaining = Math.max(0, maxRequests - entry.count);
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);

      set.headers['X-RateLimit-Limit'] = String(maxRequests);
      set.headers['X-RateLimit-Remaining'] = String(remaining);
      set.headers['X-RateLimit-Reset'] = String(entry.resetAt);

      if (entry.count > maxRequests) {
        set.status = 429;
        set.headers['Retry-After'] = String(retryAfter);
        return {
          success: false,
          error: message,
          retryAfter,
        };
      }
    });
}
