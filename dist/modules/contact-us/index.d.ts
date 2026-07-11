import { Elysia } from 'elysia';
import { ContactService } from './service.js';
export declare const contactUsModule: Elysia<"/contact-us", {
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
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {
        readonly contactService: ContactService;
    };
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly contactService: ContactService;
    }>;
}>;
//# sourceMappingURL=index.d.ts.map