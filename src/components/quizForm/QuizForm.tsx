import React, { useState } from 'react';
import NumberInput from '../numberInput/NumberInput';
import SelectInput from '../selectInput/SelectInput';
import ButtonMain from '../buttonMain/ButtonMain';
import { Link } from 'react-router-dom';

interface Option {
    value: string;
    label: string;
}

export const QuizForm : React.FC = () => {
    const [numQuestions, setNumQuestions] = useState(5);
    const [category, setCategory] = useState<Option | null>(null);
    const [difficulty, setDifficulty] = useState<Option | null>(null);
    const [type, setType] = useState<Option | null>(null);
    const [time, setTime] = useState<Option | null>(null);
  
    const categories = [
      { value: 'any', label: 'Any Category' },
      { value: 'animals', label: 'Animals' },
      { value: 'books', label: 'Books' }
    ];
  
    const difficulties = [
      { value: 'any', label: 'Any Difficulty' },
      { value: 'easy', label: 'Easy' },
      { value: 'medium', label: 'Medium' },
      { value: 'hard', label: 'Hard' },
    ];
  
    const types = [
      { value: 'any', label: 'Any Type' },
      { value: 'multiple', label: 'Multiple Choice' },
      { value: 'boolean', label: 'True/False' },
    ];
  
    const times = [
      { value: '1m', label: '1 minute' },
      { value: '2m', label: '2 minutes' },
      { value: '5m', label: '5 minutes' },
    ];

    const handleStartQuiz = () => {
    //
    };
  
    return (
    <div className='w-2/5 mx-auto'>
        <h2 className='text-5xl font-bold text-amber-500 mb-16'>Create your Quiz</h2>
        <NumberInput
            label="Number of Questions"
            value={numQuestions}
            onChange={setNumQuestions}
            min={5}
            max={15}
        />
        <SelectInput
            label="Category"
            value={category}
            onChange={setCategory}
            options={categories}
        />
        <SelectInput
            label="Difficulty"
            value={difficulty}
            onChange={setDifficulty}
            options={difficulties}
        />
        <SelectInput
            label="Type"
            value={type}
            onChange={setType}
            options={types}
        />
        <SelectInput
            label="Time"
            value={time}
            onChange={setTime}
            options={times}
        />
        <Link to='/quiz'> 
          <ButtonMain onClick={handleStartQuiz} label="Start Quiz" />
        </Link>

    </div>
    );
  };

export default QuizForm; 