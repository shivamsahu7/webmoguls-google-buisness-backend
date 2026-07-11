import mysql from 'mysql2/promise';
import * as schema from './schema/index.js';
export declare const db: import("drizzle-orm/mysql2").MySql2Database<typeof schema> & {
    $client: mysql.Pool;
};
export type Database = typeof db;
//# sourceMappingURL=index.d.ts.map