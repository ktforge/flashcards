import { createSlice } from "@reduxjs/toolkit";

// all cards live in one object keyed by id
export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    // payload looks like { id, front, back }
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id: id,
        front: front,
        back: back,
      };
    },
  },
});

// takes an id and gives back a selector for just that card
export const selectCardById = (id) => (state) => state.cards.cards[id];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
