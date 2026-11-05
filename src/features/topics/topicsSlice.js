import { createSlice } from "@reduxjs/toolkit";

// all topics live in one object keyed by id
export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    // payload looks like { id, name, icon }
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      // every topic starts with no quizzes, but still gets the empty list
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      };
    },
    // links a new quiz to its topic, same payload as addQuiz
    addQuizId: (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    },
  },
});

// the inner topics object, e.g. { '123': {...}, '456': {...} }
export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
