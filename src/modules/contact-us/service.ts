import { eq } from 'drizzle-orm';
import type { Database } from '../../db/index.js';
import { contacts, type NewContact } from '../../db/schema/index.js';

export class ContactService {
  constructor(private db: Database) {}

  async create(data: NewContact) {
    const result = await this.db.insert(contacts).values(data);
    const insertId = result[0].insertId;

    const created = await this.db
      .select()
      .from(contacts)
      .where(eq(contacts.id, insertId))
      .limit(1);

    return created[0] ?? null;
  }
}
