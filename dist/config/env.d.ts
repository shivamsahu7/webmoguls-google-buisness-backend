import 'dotenv/config';
interface EnvConfig {
    DATABASE_URL: string;
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
    CORS_ORIGIN: string;
}
export declare const env: EnvConfig;
export {};
//# sourceMappingURL=env.d.ts.map