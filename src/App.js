import React, { useState } from "react";
import Header from "./Header/Header";
import { questions } from "./Data/QuestionData";
import QuestionCard from "./QuestionCard/QuestionCard";
import Result from "./Result/Result";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Function to handle the answer clicks
  function onAnswer (isCorrect) {
    if (isCorrect) {
      setScore((preValue) => preValue + 1);
    }
    if (currentIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentIndex((value) => value + 1);
    }
  }

  // Restart Handler
  const restartHandler = () => {
    setCurrentIndex(0);
    setQuizFinished(false);
    setScore(0);
  };

  return (
    <React.Fragment>

      <Header />
      
      <main className="app">
        {quizFinished ? (
          <Result
            score={score}
            restartHandler={restartHandler}
            questions={questions}
          />
        ) : (
          <QuestionCard
            index={currentIndex}
            question={questions}
            onAnswer={onAnswer}
          />
        )}
      </main>
    </React.Fragment>
  );
}