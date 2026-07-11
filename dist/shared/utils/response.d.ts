import type { ApiResponse } from '../types/index.js';
export declare function success<T>(data: T, message?: string): ApiResponse<T>;
export declare function error(message: string, statusCode?: number): ApiResponse;
export declare function paginated<T>(data: T[], total: number, page: number, limit: number): {
    success: true;
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};
//# sourceMappingURL=response.d.ts.map