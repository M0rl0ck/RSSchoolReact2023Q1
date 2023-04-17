import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '../store';
import formReducer from '../redusers/formSlice';
import mainSearchReducer from '../redusers/mainSearchSlice';
import { mainCardsApi } from '../../store/API/mainCardsApi';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = undefined,
    store = configureStore({
      reducer: {
        [mainCardsApi.reducerPath]: mainCardsApi.reducer,
        form: formReducer,
        mainSearchValue: mainSearchReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainCardsApi.middleware),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
