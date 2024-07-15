import React from 'react';

interface AnswerOption {
  option: string;
  isCorrect: boolean;
}

interface AnswerOptionsProps {
  type: 'multiple' | 'boolean';
  answers: AnswerOption[];
  selectedAnswers: string[];
  onAnswerSelect: (answer: string) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  answers,
  selectedAnswers,
  onAnswerSelect,
}) => {

const handleCheckboxChange = (answer: string) => {
    onAnswerSelect(answer);
  };

  return (
    <div className='flex flex-col gap-4 align-start justify-start'>
      {answers.map((answer) => (
        <div key={answer.option} className='text-xl font-light text-zinc-400 text-start'>
          <label>
            <input 
                className='mr-2 w-4 h-4 rounded-md'
                type="checkbox"
                checked={selectedAnswers.includes(answer.option)}
                onChange={() => handleCheckboxChange(answer.option)}
            />
            {answer.option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;