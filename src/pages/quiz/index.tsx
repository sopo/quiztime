import { useState } from 'react';
import { quiz } from '../../data/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const QuizComponent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setResult((prevResult) => prevResult + 10);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <Card className='w-full max-w-md shadow-lg'>
        <CardHeader>
          <CardTitle className='text-blue-600'>{quiz.name}</CardTitle>
          <Progress
            value={((currentQuestionIndex + 1) / quiz.questions.length) * 100}
            className='mt-2'
          />
        </CardHeader>

        <CardContent>
          {!isQuizCompleted ? (
            <div>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>
                {currentQuestion.name}
              </h2>
              <ul className='space-y-3'>
                {currentQuestion.variants.map((variant) => (
                  <li key={variant.id}>
                    <Button
                      variant='outline'
                      className='w-full text-left'
                      onClick={() => handleAnswer(variant.isCorrect)}
                    >
                      {variant.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className='text-center'>
              <h2 className='text-xl font-bold text-green-600 mb-4'>
                Quiz Completed!
              </h2>
              <p className='text-lg text-gray-800'>Your Score: {result}</p>
            </div>
          )}
        </CardContent>

        <CardFooter>
          {!isQuizCompleted && (
            <p className='text-gray-600'>
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizComponent;
