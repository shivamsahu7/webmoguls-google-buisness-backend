import 'dotenv/config';

interface EnvConfig {
  DATABASE_URL: string;
  PORT: number;
  NODE_ENV: 'development' | 'production' | 'test';
  CORS_ORIGIN: string;
}

function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
  return value;
}

export const env: EnvConfig = {
  DATABASE_URL: getEnvVar('DATABASE_URL'),
  PORT: parseInt(getEnvVar('PORT', '3000'), 10),
  NODE_ENV: getEnvVar('NODE_ENV', 'development') as EnvConfig['NODE_ENV'],
  CORS_ORIGIN: getEnvVar('CORS_ORIGIN', 'https://webmogulsgbp.com'),
};
