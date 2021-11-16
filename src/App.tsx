import React from "react";
// components
import QuestionCard from "./components/QuestionCard";

function App() {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <button className="start" onClick={() => startTrivia()}>
        start
      </button>
      <p className="score">Score:</p>
      <p className="loading">Loading Questions ...</p>
      {/* <QuestionCard /> */}
      <button className="next" onClick={() => nextQuestion()}>
        Next Question
      </button>
    </div>
  );
}

export default App;
