import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { env } from '../config/env.js';
import * as schema from './schema/index.js';
const pool = mysql.createPool({
    uri: env.DATABASE_URL,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Hostinger's managed MySQL doesn't support binary-protocol prepared
    // statements reliably — disabling them prevents "Failed query" errors.
    namedPlaceholders: true,
    multipleStatements: false,
});
export const db = drizzle(pool, { schema, mode: 'default' });
//# sourceMappingURL=index.js.map