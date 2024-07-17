import React, { useState, useEffect } from 'react';
import ProgressBar from '../../components/progressBar/ProgressBar'
import Question from '../../components/questions/Questions';
import ButtonSecondary from '../../components/buttonSecondary/ButtonSecondary';
import ButtonMain from '../../components/buttonMain/ButtonMain';
import Timer from '../../components/timer/Timer';
import { QuizResultsPage } from '../quizResultsPage/QuizResultsPage';


// Mock data
const questions = [
    { id: 1, text: "What is the capital of France?", type: "multiple", category: "Geography" },
    { id: 2, text: "The Great Pyramid of Giza is located in which country?", type: "boolean", category: "History" },
    { id: 3, text: "What is the capital of France?", type: "multiple", category: "Geography" },
    { id: 4, text: "The Great Pyramid of Giza is located in which country?", type: "boolean", category: "History" },
    { id: 5, text: "What is the capital of France?", type: "multiple", category: "Geography" },
    { id: 6, text: "The Great Pyramid of Giza is located in which country?", type: "boolean", category: "History" },
  ];
  
const answers = [
  { id: 1, text: "Paris", isCorrect: true },
  { id: 2, text: "London", isCorrect: false },
  { id: 3, text: "Berlin", isCorrect: false },
  { id: 4, text: "Minsk", isCorrect: false },
  { id: 5, text: "Madrid", isCorrect: false },
  { id: 6, text: "London", isCorrect: true },
  { id: 7, text: "Berlin", isCorrect: false },
  { id: 8, text: "Minsk", isCorrect: false },
  { id: 9, text: "Madrid", isCorrect: false },
  { id: 10, text: "London", isCorrect: true },
  { id: 11, text: "Berlin", isCorrect: false },
  { id: 12, text: "Berlin", isCorrect: false },
  { id: 13, text: "Minsk", isCorrect: false },
  { id: 14, text: "Madrid", isCorrect: false },
  { id: 15, text: "London", isCorrect: true },
  { id: 16, text: "Berlin", isCorrect: false },
];

const questionAnswers = [
  { questionId: 1, answerIds: [1, 2, 3, 4] },
  { questionId: 2, answerIds: [5, 6] },
  { questionId: 3, answerIds: [7, 8, 9, 10] },
  { questionId: 4, answerIds: [11, 12] },
  { questionId: 5, answerIds: [13, 14, 15, 16] },
  { questionId: 6, answerIds: [5, 6] },
];


export const QuizQuestionPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
    const [quizTime, setQuizTime] = useState(120);
    const [isQuizOver, setIsQuizOver] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setQuizTime((prevTime) => {
              if (prevTime === 0) {
                setIsQuizOver(true); 
                return 0; 
              }
              return prevTime - 1;
            });
          }, 1000);
        return () => clearInterval(timer);
    }, [quizTime]);
  
    
    const currentQuestion = questions[currentQuestionIndex];

    const currentQuestionAnswers = questionAnswers.find((qa) => qa.questionId === currentQuestion.id);

    const answerOptionsForCurrentQuestion = currentQuestionAnswers
    ? answers.filter((a) => currentQuestionAnswers.answerIds.includes(a.id))
        .map(a => ({ id: a.id, text: a.text, option: a.text, isCorrect: a.isCorrect }))
    : [];

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
        setIsQuizOver(true); 
      };

    return (
        <>
            {!isQuizOver && (
                <>
                    <Timer time={quizTime} onTimeUp={handleEndQuiz} />
                    <Question
                        key={currentQuestion.id}
                        question={currentQuestion.text}
                        category={currentQuestion.category}
                        type={currentQuestion.type as "boolean" | "multiple"}
                        answers={answerOptionsForCurrentQuestion}
                        selectedAnswers={selectedAnswer}
                        onAnswerSelect={handleAnswerSelect}
                    />
    
                    <div className='flex gap-4 mb-16 justify-center'>
                            <ButtonMain onClick={handleNextQuestion} label="Next"/>
                            <ButtonSecondary onClick={handleEndQuiz} label="End Quiz" styles='w-32 h-12 mt-10'/>
                    </div>
                    <ProgressBar
                        currentIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                    />
                </>
            )}
              {isQuizOver && <QuizResultsPage/>
            }
        </>
    )
}
