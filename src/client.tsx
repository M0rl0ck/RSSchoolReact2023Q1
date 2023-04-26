import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import initStore from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './components/routes/AppRouter';

const store = initStore(window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : undefined);
const rootElem = (
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
);

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
hydrateRoot(container, rootElem);
