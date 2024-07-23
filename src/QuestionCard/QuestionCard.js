import React from "react";

const Questions = ({ index, onAnswer, question }) => {
  return (
    <React.Fragment>

      <div className="question">
        <div className="question-number">
          <span>Question {index + 1}</span>/{question.length}
        </div>
        <div className="question-text"><code>{question[index].questionText}</code></div>
      </div>

      <div className="answer">
        {question[index].answerOptions.map((option) => {
          return (
            <button className="options"
              onClick={() => onAnswer(option.isCorrect)}
              key={option.answerText}
            ><code>
              {option.answerText}
              </code>
            </button>
          );
        })}
      </div>
      
    </React.Fragment>
  );
};

export default Questions;