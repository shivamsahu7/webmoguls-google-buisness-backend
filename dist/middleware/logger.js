import { Elysia } from 'elysia';
export const loggerMiddleware = new Elysia({ name: 'logger' })
    .onRequest(({ request }) => {
    const url = new URL(request.url);
    console.log(`➡️  ${request.method} ${url.pathname}${url.search} — ${new Date().toISOString()}`);
})
    .onAfterResponse(({ request, set }) => {
    const url = new URL(request.url);
    console.log(`⬅️  ${request.method} ${url.pathname} — ${set.status ?? 200}`);
});
//# sourceMappingURL=logger.js.map