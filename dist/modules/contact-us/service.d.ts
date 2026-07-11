import type { Database } from '../../db/index.js';
import { type NewContact } from '../../db/schema/index.js';
export declare class ContactService {
    private db;
    constructor(db: Database);
    create(data: NewContact): Promise<{
        id: number;
        fullName: string;
        businessEmail: string;
        businessName: string;
        website: string | null;
        tellUsAbout: string | null;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=service.d.ts.map