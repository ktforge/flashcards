// every url in one place so links and routes stay in sync
const ROUTES = {
  newQuizRoute: () => "/quizzes/new",
  quizRoute: (id) => `/quizzes/${id}`,
  quizzesRoute: () => "/quizzes",
  newTopicRoute: () => "/topics/new",
  topicRoute: (id) => `/topics/${id}`,
  topicsRoute: () => "/topics",
};

export default ROUTES;
