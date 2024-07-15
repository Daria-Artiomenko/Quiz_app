import React from 'react';
import AnswerOptions from '../answerOptions/AnswerOptions';

interface AnswerOption {
    option: string;
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
        <div>
        <div className='text-3xl font-medium text-zinc-200 mb-16'>{question}</div>
        <AnswerOptions
            type={type}
            answers={answers}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={onAnswerSelect}
        />
        </div>
    );
};


export default Question;