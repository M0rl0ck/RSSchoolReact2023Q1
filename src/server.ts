import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer } from 'vite';

const PORT = 5173;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

    render(req.originalUrl, res);
  });

  app.listen(PORT, () => {
    console.log('Server start on: http://localhost:5173');
  });
}

startServer();
