import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface MainSearchState {
  searchValue: string;
}

const initialState: MainSearchState = {
  searchValue: '',
};

const mainSearchSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setSeatchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

const selectSearchValue = (state: RootState) => state.mainSearchValue.searchValue;

export default mainSearchSlice.reducer;
export { selectSearchValue, mainSearchSlice };
