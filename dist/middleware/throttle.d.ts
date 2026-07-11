import { Elysia } from 'elysia';
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
export declare function throttle(options: ThrottleOptions): Elysia<"", {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {
        200: {
            success: boolean;
            error: string;
            retryAfter: number;
        };
    };
}>;
export {};
//# sourceMappingURL=throttle.d.ts.map