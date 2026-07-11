import type { ApiResponse } from '../types/index.js';

export function success<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message: message ?? 'Success',
  };
}

export function error(message: string, statusCode?: number): ApiResponse {
  return {
    success: false,
    error: message,
  };
}

export function paginated<T>(
  data: T[],
  total: number,
  page: number,
  limit: number
) {
  return {
    success: true as const,
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}
