import React from 'react';
import ButtonMain from '../../components/buttonMain/ButtonMain';

interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  quizConfig: {
    type: string;
    category: string;
    time: number;
    difficulty: string;
  };
  timeTaken: number;
  onRestart: () => void;
  onChooseAnother: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  correctAnswers,
  totalQuestions,
  quizConfig,
  timeTaken,
  onRestart,
  onChooseAnother,
}) => {
    const formattedTimeTaken = new Date(timeTaken * 1000).toISOString().slice(14, 19);

    return (
        <div >
            <h2 className='text-3xl font-medium text-amber-500 mb-16 text-center w-2/3 mx-auto'> Your Results:</h2>
            <p className='text-xl font-light text-zinc-200 text-center mb-4'>You answered 
                <span className='font-medium text-amber-500'> {correctAnswers} </span> 
                out of <span className='font-medium text-amber-500'> {totalQuestions} </span>
                questions correctly.
            </p>
            <div className='flex flex-col gap-2 text-xl font-light text-zinc-200 text-center'>
            <p><span className='font-medium text-amber-500'>Type: </span> {quizConfig.type}</p>
            <p> <span className='font-medium text-amber-500'>Category: </span> {quizConfig.category}</p>
            <p> <span className='font-medium text-amber-500'>Time spent: </span> {formattedTimeTaken} </p>
            <p> <span className='font-medium text-amber-500'>Time: </span> {quizConfig.time} seconds</p>

            <p> <span className='font-medium text-amber-500'>Difficulty: </span> {quizConfig.difficulty}</p>
            </div>
            
            <div className='flex justify-center mt-4 gap-4'>
            <ButtonMain onClick={onRestart} label="Restart" />
            <ButtonMain onClick={onChooseAnother} label="Choose Another Quiz" />
            </div>
        </div>
    );
};
