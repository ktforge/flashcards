import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectTopics } from "./topicsSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Topic() {
  // all topics, so the one in the url can be looked up by id
  const topics = useSelector(selectTopics);
  // all quizzes, so this topic's quizIds can be turned into quiz objects
  const quizzes = useSelector(selectQuizzes);
  const { topicId } = useParams();
  const topic = topics[topicId];

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />;
  }

  // turn the topic's list of ids into the actual quiz objects
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
