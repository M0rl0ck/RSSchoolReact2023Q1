import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/app/App';
import initStore, { RootState } from '../store/store';
import { Response } from 'express';
import preloadCards from './utils/preloadCards';

const store = initStore();

export async function render(url: string, res: Response) {
  await preloadCards(store);
  const preloadStore: RootState = { ...store.getState() };
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    {
      bootstrapScriptContent: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadStore)}`,
      bootstrapModules: ['./src/client.tsx'],
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
    }
  );
}
