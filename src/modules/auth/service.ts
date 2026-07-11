import { eq } from 'drizzle-orm';
import type { Database } from '../../db/index.js';
import { users } from '../../db/schema/index.js';

export class AuthService {
  constructor(private db: Database) {}

  async login(email: string, _password: string) {
    const user = await this.db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user[0]) {
      return null;
    }

    // TODO: Implement proper password hashing comparison (e.g., bcrypt)
    // For now, this is a placeholder
    return user[0];
  }

  async register(data: { name: string; email: string; password: string }) {
    // Check if user already exists
    const existing = await this.db
      .select()
      .from(users)
      .where(eq(users.email, data.email))
      .limit(1);

    if (existing[0]) {
      return null;
    }

    // TODO: Hash password before storing (e.g., bcrypt)
    const result = await this.db.insert(users).values({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    const insertId = result[0].insertId;
    const newUser = await this.db
      .select()
      .from(users)
      .where(eq(users.id, insertId))
      .limit(1);

    return newUser[0] ?? null;
  }
}
