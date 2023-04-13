import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redusers/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export { RootState, AppDispatch };
export default store;
