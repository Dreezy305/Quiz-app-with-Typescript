import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";

// components
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    // console.log(newQuestion);

    setQuestions(newQuestion !== undefined ? newQuestion : []);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score
    }
  };

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>QUIZ APP</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={() => startTrivia()}>
          start
        </button>
      ) : (
        ""
      )}

      {!gameOver && <p className="score">Score:</p>}

      {loading && <p className="loading">Loading Questions ...</p>}

      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={() => nextQuestion()}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default App;
