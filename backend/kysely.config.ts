// import {
//   DummyDriver,
//   PostgresAdapter,
//   PostgresIntrospector,
//   PostgresQueryCompiler,
// } from 'kysely';
import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl';
import { db } from './src/db/database.js';

export default defineConfig({
  // replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
  // dialect: {
  //   createAdapter() {
  //     return new PostgresAdapter();
  //   },
  //   createDriver() {
  //     return new DummyDriver();
  //   },
  //   createIntrospector(db) {
  //     return new PostgresIntrospector(db);
  //   },
  //   createQueryCompiler() {
  //     return new PostgresQueryCompiler();
  //   },
  // },
  kysely: db,
  migrations: {
    migrationFolder: 'src/db/migrations',
    getMigrationPrefix: getKnexTimestampPrefix,
  },
});
