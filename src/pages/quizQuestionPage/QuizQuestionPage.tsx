import React, { useState, useEffect } from 'react';
import ProgressBar from '../../components/progressBar/ProgressBar'
import Question from '../../components/questions/Questions';
import ButtonSecondary from '../../components/buttonSecondary/ButtonSecondary';
import ButtonMain from '../../components/buttonMain/ButtonMain';
import Timer from '../../components/timer/Timer';

//Mock data
const quizQuestions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      answers: [
        { option: 'Paris', isCorrect: true },
        { option: 'London', isCorrect: false },
        { option: 'Berlin', isCorrect: false },
        { option: 'Madrid', isCorrect: false },
      ],
      type: 'multiple',
      category: 'Geography',
    },
    {
      id: 2,
      question: 'The Great Pyramid of Giza is located in which country?',
      answers: [
        { option: 'Egypt', isCorrect: true },
        { option: 'Greece', isCorrect: false },
      ],
      type: 'boolean',
      category: 'History',
    },
    {
      id: 3,
      question: 'What is the largest ocean on Earth?',
      answers: [
        { option: 'Pacific Ocean', isCorrect: true },
        { option: 'Atlantic Ocean', isCorrect: false },
        { option: 'Indian Ocean', isCorrect: false },
        { option: 'Arctic Ocean', isCorrect: false },
      ],
      type: 'multiple',
      category: 'Geography',
    },
    {
      id: 4,
      question: 'The Mona Lisa was painted by which artist?',
      answers: [
        { option: 'Leonardo da Vinci', isCorrect: true },
        { option: 'Michelangelo', isCorrect: false },
      ],
      type: 'boolean',
      category: 'Art & Literature',
    },
    {
      id: 5,
      question: 'What is the smallest planet in our solar system?',
      answers: [
        { option: 'Mercury', isCorrect: true },
        { option: 'Venus', isCorrect: false },
        { option: 'Earth', isCorrect: false },
        { option: 'Mars', isCorrect: false },
      ],
      type: 'multiple',
      category: 'Science',
    },
  ];

export const QuizQuestionPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
    const [quizTime, setQuizTime] = useState(120);

    useEffect(() => {
        const timer = setInterval(() => {
          setQuizTime((prevTime) => prevTime - 1);
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleNextQuestion = () => {
        setSelectedAnswer([]);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      };

    const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer((prevSelectedAnswer) =>
        prevSelectedAnswer.includes(answer)
        ? prevSelectedAnswer.filter((a) => a !== answer)
        : [...prevSelectedAnswer, answer]
    );
    };
    
      const handleEndQuiz = () => {
        // 
      };
    return (
        <>
            <Timer time={quizTime} />
            <Question
                key={currentQuestion.id} 
                question={currentQuestion.question}
                category={currentQuestion.category}
                type={currentQuestion.type as "boolean" | "multiple"}
                answers={currentQuestion.answers}
                selectedAnswers={selectedAnswer}
                onAnswerSelect={handleAnswerSelect}
            />
            <div className='flex gap-4 mb-16 justify-center'>
                <ButtonMain onClick={handleNextQuestion} label="Next"/>
                <ButtonSecondary onClick={handleEndQuiz} label="End Quiz" styles='w-32 h-12 mt-10'/>
            </div>

            <ProgressBar
                currentIndex={currentQuestionIndex}
                totalQuestions={quizQuestions.length}
            />
        </>
    )
}
