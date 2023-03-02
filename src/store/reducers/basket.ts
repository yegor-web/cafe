import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "..//..//Models/ICard"

export interface Basket {
  bask: ICard;
}

const initialState: Basket = {
  bask: {
    name: ['Завтрак', 'Похудение', 'Поддержание', 'Набор'],
    description: 'Овсянная каша с молоком и яблоком',
    wage: '500Ккал, 220г'
  },

};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // addCard(state, action: PayloadAction<ICard>) {
    //   state.bask.push(action.payload);
    // },
    removeAll(state) {
      state = initialState;
    }
  },
})

export default basketSlice.reducer;
