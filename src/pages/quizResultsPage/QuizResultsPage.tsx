import React from 'react';
import { QuizResults } from '../../components/quizResults/QuizResults';

const quizConfig = {
  type: 'Multiple Choice',
  category: 'History',
  time: 120,
  difficulty: 'Medium',
};

export const QuizResultsPage: React.FC = () => {
  return (
    <QuizResults
      correctAnswers={5}
      totalQuestions={10}
      quizConfig={quizConfig}
      timeTaken={90}
      onRestart={() => console.log('Restart clicked')}
      onChooseAnother={() => console.log('Choose Another clicked')}
    />
  );
};