import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from './database-types.d.ts';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    'Database connection string is not set in the environment variables',
  );
}

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
