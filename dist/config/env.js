import 'dotenv/config';
function getEnvVar(key, fallback) {
    const value = process.env[key] ?? fallback;
    if (!value) {
        throw new Error(`❌ Missing required environment variable: ${key}`);
    }
    return value;
}
export const env = {
    DATABASE_URL: getEnvVar('DATABASE_URL'),
    PORT: parseInt(getEnvVar('PORT', '3000'), 10),
    NODE_ENV: getEnvVar('NODE_ENV', 'development'),
    CORS_ORIGIN: getEnvVar('CORS_ORIGIN', 'https://webmogulsgbp.com'),
};
//# sourceMappingURL=env.js.map