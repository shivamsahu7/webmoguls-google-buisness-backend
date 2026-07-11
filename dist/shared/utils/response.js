export function success(data, message) {
    return {
        success: true,
        data,
        message: message ?? 'Success',
    };
}
export function error(message, statusCode) {
    return {
        success: false,
        error: message,
    };
}
export function paginated(data, total, page, limit) {
    return {
        success: true,
        data,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
}
//# sourceMappingURL=response.js.map