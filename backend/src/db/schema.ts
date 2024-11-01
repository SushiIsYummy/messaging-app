import type { ColumnType, Generated } from 'kysely';

export interface Database {
  usernames: UsernamesTable;
}

export interface UsernamesTable {
  id: Generated<number>;
  username: string;
  created_at: ColumnType<Date, string | undefined, never>;
}
