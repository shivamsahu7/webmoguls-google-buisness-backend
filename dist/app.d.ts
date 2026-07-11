import { Elysia } from 'elysia';
export declare const app: Elysia<"", {
    decorator: {
        db: import("drizzle-orm/mysql2").MySql2Database<typeof import("./db/schema/index.js")> & {
            $client: import("mysql2/promise").Pool;
        };
    };
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
}, {
    get: {
        body: unknown;
        params: {};
        query: unknown;
        headers: unknown;
        response: {
            200: string | {
                success: boolean;
                error: "Validation failed";
                details: any;
            } | {
                success: boolean;
                error: string;
                details?: undefined;
            };
        };
    };
} & {
    health: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    success: boolean;
                    error: "Validation failed";
                    details: any;
                } | {
                    success: boolean;
                    error: string;
                    details?: undefined;
                } | import("./shared/types/index.js").ApiResponse<{
                    status: string;
                    uptime: number;
                }>;
            };
        };
    };
} & {
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
                    200: import("./shared/types/index.js").ApiResponse<unknown>;
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
                    200: import("./shared/types/index.js").ApiResponse<unknown>;
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
    users: {};
} & {
    users: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./shared/types/index.js").ApiResponse<{
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
                    200: import("./shared/types/index.js").ApiResponse<unknown>;
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
                200: import("./shared/types/index.js").ApiResponse<unknown>;
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
                    200: import("./shared/types/index.js").ApiResponse<unknown>;
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
                    200: import("./shared/types/index.js").ApiResponse<unknown>;
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
    "contact-us": {};
} & {
    "contact-us": {
        post: {
            body: {
                website?: string | undefined;
                tellUsAbout?: string | undefined;
                fullName: string;
                businessEmail: string;
                businessName: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./shared/types/index.js").ApiResponse<unknown>;
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
}, {
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
            error: "Validation failed";
            details: any;
        } | {
            success: boolean;
            error: string;
            details?: undefined;
        };
    };
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
//# sourceMappingURL=app.d.ts.map