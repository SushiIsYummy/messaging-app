import { db } from './database.js';

async function seedDevData() {
  console.log('Starting dev database seeding...');

  if (process.env.NODE_ENV !== 'development') {
    throw new Error(
      'This script is only intended for development environments',
    );
  }

  try {
    // Begin a transaction
    await db.transaction().execute(async (trx) => {
      // Create the table if it doesn't exist
      await trx.schema
        .createTable('usernames')
        .ifNotExists()
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('username', 'varchar(255)', (col) => col.notNull())
        .execute();

      // Truncate the table (faster than delete and resets auto-increment)
      await trx.deleteFrom('usernames').execute();
      console.log('Cleared existing data from usernames table');

      // Insert new seed data
      await trx
        .insertInto('usernames')
        .values([
          { username: 'DevUser1' },
          { username: 'DevUser2' },
          { username: 'DevUser3' },
        ])
        .execute();
      console.log('Inserted new seed data into usernames table');
    });

    console.log('Dev database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding dev database:', error);
  } finally {
    await db.destroy();
  }
}

seedDevData().catch(console.error);
