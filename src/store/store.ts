import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redusers/formSlice';
import mainReducer from './redusers/mainCardSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    mainCards: mainReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppStore = typeof store;
type AppDispatch = typeof store.dispatch;

export { RootState, AppStore, AppDispatch };
export default store;
