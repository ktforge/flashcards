import { createSlice } from "@reduxjs/toolkit";

// all quizzes live in one object keyed by id
export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    // payload looks like { id, name, topicId, cardIds }
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds,
      };
    },
  },
});

// the inner quizzes object, e.g. { '123': {...}, '456': {...} }
export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
