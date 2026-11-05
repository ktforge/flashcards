import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    // state.topics comes from this key
    topics: topicsReducer,
    // state.quizzes comes from this key
    quizzes: quizzesReducer,
    // state.cards comes from this key
    cards: cardsReducer,
  },
});
