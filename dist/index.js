import { env } from './config/env.js';
import { app } from './app.js';
app.listen(env.PORT, () => {
    console.log(`
  🦊 Elysia.js Server is running!
  
  ➜  Local:   http://localhost:${env.PORT}
  ➜  Docs:    http://localhost:${env.PORT}/docs
  ➜  Mode:    ${env.NODE_ENV}
  ➜  CORS:    ${env.CORS_ORIGIN}
  ➜  Runtime: Node.js ${process.version}
  `);
});
//# sourceMappingURL=index.js.map