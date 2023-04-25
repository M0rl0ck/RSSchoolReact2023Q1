import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import initStore from './store/store';
import { Provider } from 'react-redux';
import './index.css';

const store = initStore(window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : undefined);

hydrateRoot(
  document,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
