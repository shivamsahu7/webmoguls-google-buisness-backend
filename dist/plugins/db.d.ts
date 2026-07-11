import { Elysia } from 'elysia';
export declare const dbPlugin: Elysia<"", {
    decorator: {
        db: import("drizzle-orm/mysql2").MySql2Database<typeof import("../db/schema/index.js")> & {
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
    response: {};
}>;
//# sourceMappingURL=db.d.ts.map