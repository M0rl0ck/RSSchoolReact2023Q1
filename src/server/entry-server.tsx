import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/app/App';
import initStore, { RootState } from '../store/store';
import { Response } from 'express';
import preloadCards from './utils/preloadCards';
import AppRouter from '../components/routes/AppRouter';

const store = initStore();

export async function render(url: string, res: Response) {
  await preloadCards(store);
  const { header, footer } = App();

  res.setHeader('content-type', 'text/html');
  res.write(header);
  let isError = false;
  const preloadStore: RootState = { ...store.getState() };
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StaticRouter>,
    {
      bootstrapScriptContent: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadStore)}`,
      bootstrapModules: ['./src/client.tsx'],
      onShellReady() {
        res.statusCode = isError ? 500 : 200;
        pipe(res);
      },
      onAllReady() {
        res.end(footer);
      },
      onError(err) {
        isError = true;
        console.error(err);
      },
    }
  );
}
