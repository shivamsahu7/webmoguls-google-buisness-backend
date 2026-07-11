import { eq } from 'drizzle-orm';
import { users } from '../../db/schema/index.js';
export class UserService {
    db;
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        return this.db.select().from(users);
    }
    async findById(id) {
        const result = await this.db
            .select()
            .from(users)
            .where(eq(users.id, id))
            .limit(1);
        return result[0] ?? null;
    }
    async findByEmail(email) {
        const result = await this.db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);
        return result[0] ?? null;
    }
    async create(data) {
        const result = await this.db.insert(users).values(data);
        const insertId = result[0].insertId;
        return this.findById(insertId);
    }
    async update(id, data) {
        await this.db.update(users).set(data).where(eq(users.id, id));
        return this.findById(id);
    }
    async delete(id) {
        const user = await this.findById(id);
        if (!user)
            return null;
        await this.db.delete(users).where(eq(users.id, id));
        return user;
    }
}
//# sourceMappingURL=service.js.map