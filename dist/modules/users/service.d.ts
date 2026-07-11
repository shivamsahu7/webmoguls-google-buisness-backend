import type { Database } from '../../db/index.js';
import { type NewUser } from '../../db/schema/index.js';
export declare class UserService {
    private db;
    constructor(db: Database);
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: NewUser): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: Partial<NewUser>): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
//# sourceMappingURL=service.d.ts.map