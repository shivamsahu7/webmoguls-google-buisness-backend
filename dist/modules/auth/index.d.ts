import { Elysia } from 'elysia';
import { AuthService } from './service.js';
export declare const authModule: Elysia<"/auth", {
    decorator: {
        db: import("drizzle-orm/mysql2").MySql2Database<typeof import("../../db/schema/index.js")> & {
            $client: import("mysql2/promise").Pool;
        };
    };
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
}, {
    auth: {};
} & {
    auth: {
        login: {
            post: {
                body: {
                    email: string;
                    password: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: import("../../shared/types/index.js").ApiResponse<unknown>;
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        register: {
            post: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: import("../../shared/types/index.js").ApiResponse<unknown>;
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {
        readonly authService: AuthService;
    };
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly authService: AuthService;
    }>;
}>;
//# sourceMappingURL=index.d.ts.map