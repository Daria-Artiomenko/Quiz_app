import React from 'react';
import AnswerOptions from '../answerOptions/AnswerOptions';

interface AnswerOption {
    id: number;
    text: string;
    isCorrect: boolean;
  }
  
  interface QuestionProps {
    question: string;
    category: string;
    type: 'multiple' | 'boolean';
    answers: AnswerOption[];
    selectedAnswers: string[];
    onAnswerSelect: (answer: string) => void;
  }
  
  const Question: React.FC<QuestionProps> = ({
    question,
    type,
    answers,
    selectedAnswers,
    onAnswerSelect,

    }) => {

    return (
        <div className='h-3/4'>
        <div className='text-3xl font-medium text-zinc-200 mb-16 text-center w-2/3 mx-auto'>{question}</div>
        <div className='w-2/3 mx-auto'>
            <AnswerOptions
                type={type}
                answers={answers}
                selectedAnswers={selectedAnswers}
                onAnswerSelect={onAnswerSelect}
            />
        </div>

        </div>
    );
};


export default Question;