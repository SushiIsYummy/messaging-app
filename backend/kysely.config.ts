import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl';
import { db } from './src/db/database.js';

export default defineConfig({
  kysely: db,
  migrations: {
    migrationFolder: 'src/db/migrations',
    getMigrationPrefix: getKnexTimestampPrefix,
  },
  seeds: {
    seedFolder: 'src/db/seeds',
    getSeedPrefix: getKnexTimestampPrefix,
  },
});
