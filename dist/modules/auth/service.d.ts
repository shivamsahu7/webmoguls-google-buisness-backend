import type { Database } from '../../db/index.js';
export declare class AuthService {
    private db;
    constructor(db: Database);
    login(email: string, _password: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    register(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
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