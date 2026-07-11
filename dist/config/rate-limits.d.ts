/**
 * Pre-configured rate limit presets.
 * Modules simply `.use()` the preset they need — no config duplication.
 *
 * Usage: .use(rateLimits.strict)
 */
export declare const rateLimits: {
    /** 1 request per minute — for form submissions (contact us, etc.) */
    readonly strict: import("elysia").default<"", {
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
    /** 10 requests per minute — for auth endpoints (login, register) */
    readonly auth: import("elysia").default<"", {
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
    /** 60 requests per minute — general API usage */
    readonly standard: import("elysia").default<"", {
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
};
//# sourceMappingURL=rate-limits.d.ts.map