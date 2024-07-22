import React from 'react';

interface AnswerOption {
    id: number;
    text: string;
}

interface AnswerOptionsProps {
    type: 'multiple' | 'boolean';
    answers: AnswerOption[];
    selectedAnswers: string[];
    onAnswerSelect: (answer: string) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
    type,
    answers,
    selectedAnswers,
    onAnswerSelect,
}) => {
    const handleAnswerSelect = (answer: string) => {
        onAnswerSelect(answer);
      };
  
    return (
        <div className='flex flex-col gap-4 align-start justify-start'>

            {answers.map((answer) => (
                <div key={answer.id} className='text-xl font-light text-zinc-400 text-start'>
                <label>
                    <input
                    className='mr-2 w-4 h-4 rounded-md'
                    type={type === 'multiple' ? 'checkbox' : 'radio'}
                    checked={selectedAnswers.includes(answer.text)}
                    onChange={() => handleAnswerSelect(answer.text)}
                    />
                    {answer.text}
                </label>
                </div>
            ))}
    </div>
    );
};

export default AnswerOptions;