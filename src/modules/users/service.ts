import { eq } from 'drizzle-orm';
import type { Database } from '../../db/index.js';
import { users, type NewUser } from '../../db/schema/index.js';

export class UserService {
  constructor(private db: Database) {}

  async findAll() {
    return this.db.select().from(users);
  }

  async findById(id: number) {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);

    return result[0] ?? null;
  }

  async findByEmail(email: string) {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return result[0] ?? null;
  }

  async create(data: NewUser) {
    const result = await this.db.insert(users).values(data);
    const insertId = result[0].insertId;
    return this.findById(insertId);
  }

  async update(id: number, data: Partial<NewUser>) {
    await this.db.update(users).set(data).where(eq(users.id, id));
    return this.findById(id);
  }

  async delete(id: number) {
    const user = await this.findById(id);
    if (!user) return null;

    await this.db.delete(users).where(eq(users.id, id));
    return user;
  }
}
