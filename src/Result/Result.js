import React from "react";
import Confetti from "react-confetti";

const Result = ({ score, questions, restartHandler }) => {
  const showConfetti = score > 7 ? <Confetti /> : null;
  
  return (
    <React.Fragment>
      {showConfetti}
      <div className="finalScore">
        You scored {score} out of {questions.length}
      </div>

      <button onClick={restartHandler} className="restart">
        RESTART{" "}
      </button>
    </React.Fragment>
  );
};

export default Result;