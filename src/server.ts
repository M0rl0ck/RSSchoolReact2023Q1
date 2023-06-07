import express from 'express';
import { createServer } from 'vite';

const PORT = 5173;

async function startServer() {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const render = (await vite.ssrLoadModule('/src/server/entry-server.tsx')).render;

    render(req.originalUrl, res);
  });

  app.listen(PORT, () => {
    console.log('Server start on: http://localhost:5173');
  });
}

startServer();
