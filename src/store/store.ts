import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redusers/formSlice';
import mainSearchReducer from './redusers/mainSearchSlice';
import { mainCardsApi } from './API/mainCardsApi';

const store = configureStore({
  reducer: {
    [mainCardsApi.reducerPath]: mainCardsApi.reducer,
    form: formReducer,
    mainSearchValue: mainSearchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainCardsApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppStore = typeof store;
type AppDispatch = typeof store.dispatch;

export { RootState, AppStore, AppDispatch };
export default store;
