import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    // state.topics comes from this key
    topics: topicsReducer,
    // state.quizzes comes from this key
    quizzes: quizzesReducer,
  },
});
