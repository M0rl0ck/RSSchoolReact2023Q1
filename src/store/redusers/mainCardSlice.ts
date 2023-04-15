import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import ICharacterCard from 'infostructure/ICharacterCard';

interface MainCardState {
  searchValue: string;
  cards: ICharacterCard[];
  isLoading: boolean;
}

const initialState: MainCardState = {
  searchValue: '',
  isLoading: false,
  cards: [],
};

const mainCardSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    cardFetching: (state) => {
      state.isLoading = true;
    },
    cardFetchingOk: (state, action: PayloadAction<ICharacterCard[]>) => {
      state.isLoading = false;
      state.cards = action.payload;
    },
    setSeatchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

const selectCards = (state: RootState) => state.form.cards;

export default mainCardSlice.reducer;
export { selectCards, mainCardSlice };
