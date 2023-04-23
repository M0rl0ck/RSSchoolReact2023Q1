import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';

hydrateRoot(
  document,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
