import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import IFormCard from 'infostructure/IFormCard';

interface FormCardState {
  cards: IFormCard[];
}

const initialState: FormCardState = {
  cards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<IFormCard>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

const { addCard } = formSlice.actions;
const selectForm = (state: RootState) => state.form.cards;

export default formSlice.reducer;
export { selectForm, addCard, formSlice };
