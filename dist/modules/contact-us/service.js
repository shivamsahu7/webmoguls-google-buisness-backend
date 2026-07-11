import { eq } from 'drizzle-orm';
import { contacts } from '../../db/schema/index.js';
export class ContactService {
    db;
    constructor(db) {
        this.db = db;
    }
    async create(data) {
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
//# sourceMappingURL=service.js.map