import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './redusers/formSlice';
import mainSearchReducer from './redusers/mainSearchSlice';
import { mainCardsApi } from './API/mainCardsApi';

const rootReducer = combineReducers({
  [mainCardsApi.reducerPath]: mainCardsApi.reducer,
  form: formReducer,
  mainSearchValue: mainSearchReducer,
});

const initStore = (preloadState: RootState | undefined = undefined) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainCardsApi.middleware),
    preloadedState: preloadState,
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof initStore>;

export { RootState, AppStore };
export default initStore;
