import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from './database-types.js';

const { Pool } = pg;

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = isProduction
  ? process.env.PROD_DATABASE_URL
  : process.env.DEV_DATABASE_URL;

if (!connectionString) {
  throw new Error(
    'Database connection string is not set in the environment variables',
  );
}

const dialect = new PostgresDialect({
  pool: new Pool({ connectionString }),
});

export const db = new Kysely<DB>({
  dialect,
});
