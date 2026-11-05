# Flashcards

A flashcard quiz app I built for Codecademy's Full-Stack Engineer path. You make topics, build quizzes for those topics, and fill each quiz with cards you can flip to check your answers.

Live site: (coming soon)

## What it does

You start on the Topics page and create a topic with a name and an icon. Then you build a quiz: give it a title, pick its topic, and add as many front/back cards as you want. Each topic shows how many quizzes it has, and opening a topic lists them. Opening a quiz shows its cards, and clicking a card flips it from the question to the answer.

The form won't save a quiz until it has a title and a topic.

Everything lives in the Redux store in memory, so a refresh starts you fresh.

## How it works

There are three slices: topics, quizzes, and cards. Each one stores its items in an object keyed by id, and they link to each other by id instead of copying data:

```
topic  { id, name, icon, quizIds: [...] }
quiz   { id, name, topicId, cardIds: [...] }
card   { id, front, back }
```

When you submit a new quiz, the form saves each card with `addCard`, saves the quiz with `addQuiz`, and then adds the quiz's id to its topic with `addQuizId`. Ids come from `uuidv4()`.

## What I learned

The starter came as a Create React App project, so I moved it to Vite first. The build failed right away because the forms import `uuid`, but it was never listed in package.json, so I added it.

Most of my bugs were typos in names. I saved the cards slice as `cardSlice.js` while everything imported `cardsSlice`, I typed `selectCarById` in the Card component, and I exported `adQuizId` with one d. Each one either broke the build or gave me a blank white page. The browser console named the missing variable every time, so now I check there first.

At one point clicking a quiz did nothing. The Quiz page still had its placeholder `quizzes = {}`, so it couldn't find the quiz and redirected me straight back to the list. Swapping in the selector fixed it.

My topics kept showing "0 Quizzes" even after I made a quiz for them. Saving the quiz wasn't enough: I also had to dispatch `addQuizId` so the topic knew about it. That's also why the form now requires a topic, since there's nothing to link the quiz to without one.

## Run it

```
npm install
npm run dev
```

Then open the link Vite prints, usually http://localhost:5173.

Example: create a "Math" topic, then a quiz called "Addition" with the cards 2+2 / 4 and 3+3 / 6. The Topics page shows

```
Math
1 Quizzes
```

and on the quiz page, clicking the 2+2 card flips it to 4.

Built with React, Redux Toolkit, React Redux, React Router, and Vite.

Built by DeVante Bush
