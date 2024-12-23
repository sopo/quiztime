import { useState } from "react";
import { quiz } from "../../data/data";

const QuizComponent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <h1>{quiz.name}</h1>
      <div>
        <h2>{currentQuestion.name}</h2>
        <ul>
          {currentQuestion.variants.map((variant) => (
            <li key={variant.id}>
              <button>{variant.name}</button>
            </li>
          ))}
        </ul>
      </div>
      {currentQuestionIndex < quiz.questions.length - 1 && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
      {currentQuestionIndex === quiz.questions.length - 1 && (
        <p>Quiz Completed!</p>
      )}
    </div>
  );
};

export default QuizComponent;
