export const loggerMiddleware = (req, res, next) => {
    const url = req.originalUrl;
    console.log(`➡️  ${req.method} ${url} — ${new Date().toISOString()}`);
    res.on('finish', () => {
        console.log(`⬅️  ${req.method} ${url} — ${res.statusCode}`);
    });
    next();
};
//# sourceMappingURL=logger.js.map