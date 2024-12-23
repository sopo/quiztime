import { useState } from "react";
import { quiz } from "../../data/data";

const QuizComponent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false); // State to track if quiz is completed

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setResult((prevResult) => prevResult + 10);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true); // Mark quiz as completed
    }
  };

  return (
    <div>
      <h1>{quiz.name}</h1>
      {!isQuizCompleted ? (
        <div>
          <h2>{currentQuestion.name}</h2>
          <ul>
            {currentQuestion.variants.map((variant) => (
              <li key={variant.id}>
                <button onClick={() => handleAnswer(variant.isCorrect)}>
                  {variant.name}
                </button>
              </li>
            ))}
          </ul>
          {currentQuestionIndex < quiz.questions.length - 1 && (
            <p>
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </p>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {result}</p>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
