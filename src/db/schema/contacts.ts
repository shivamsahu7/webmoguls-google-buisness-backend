import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
} from 'drizzle-orm/mysql-core';

export const contacts = mysqlTable('contacts', {
  id: int('id').primaryKey().autoincrement(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  businessEmail: varchar('business_email', { length: 255 }).notNull(),
  businessName: varchar('business_name', { length: 255 }).notNull(),
  website: varchar('website', { length: 500 }),
  tellUsAbout: text('tell_us_about'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
