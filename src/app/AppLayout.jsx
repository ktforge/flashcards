import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";

// nav bar that stays on every page
export default function AppLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()}>Topics</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()}>Quizzes</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()}>New Quiz</NavLink>
          </li>
        </ul>
      </nav>
      {/* whichever page matches the url shows up here */}
      <Outlet />
    </div>
  );
}
