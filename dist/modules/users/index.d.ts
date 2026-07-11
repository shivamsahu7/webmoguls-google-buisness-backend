import { Elysia } from 'elysia';
import { UserService } from './service.js';
export declare const usersModule: Elysia<"/users", {
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
    users: {};
} & {
    users: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("../../shared/types/index.js").ApiResponse<{
                    id: number;
                    name: string;
                    email: string;
                    password: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                }[]>;
            };
        };
    };
} & {
    users: {
        ":id": {
            get: {
                body: unknown;
                params: {
                    id: number;
                };
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
    users: {
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
} & {
    users: {
        ":id": {
            put: {
                body: {
                    name?: string | undefined;
                    email?: string | undefined;
                    isActive?: boolean | undefined;
                };
                params: {
                    id: number;
                };
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
    users: {
        ":id": {
            delete: {
                body: unknown;
                params: {
                    id: number;
                };
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
        readonly userService: UserService;
    };
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly userService: UserService;
    }>;
}>;
//# sourceMappingURL=index.d.ts.map