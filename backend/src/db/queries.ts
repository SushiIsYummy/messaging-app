import { db } from './database.js';

export async function getAllUsernames() {
  return await db.selectFrom('usernames').selectAll().execute();
}

export async function insertUsername(username: string) {
  const insertedRows = await db
    .insertInto('usernames')
    .values({ username })
    .returning(['id', 'username'])
    .execute();

  if (insertedRows.length === 0) {
    throw new Error('Failed to insert username');
  }

  return insertedRows[0];
}
