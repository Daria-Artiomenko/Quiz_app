import React, { useState, useEffect } from 'react';
import ProgressBar from '../../components/progressBar/ProgressBar'
import Question from '../../components/questions/Questions';
import ButtonSecondary from '../../components/buttonSecondary/ButtonSecondary';
import ButtonMain from '../../components/buttonMain/ButtonMain';
import Timer from '../../components/timer/Timer';
import { QuizResultsPage } from '../quizResultsPage/QuizResultsPage';
import { questions, answers, questionAnswers } from '../../data/mockData';


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
				() => clearInterval(timer); 
                return 0; 
              }
              return prevTime - 1;
            });
          }, 1000);
        return ;

    }, [quizTime]);
  
    
    const currentQuestion = questions[currentQuestionIndex];

    const currentQuestionAnswers = questionAnswers.find((qa) => qa.questionId === currentQuestion.id);

    const answerOptionsForCurrentQuestion = currentQuestionAnswers
    ? answers.filter((a) => currentQuestionAnswers.answerIds.includes(a.id))
        .map(a => ({ id: a.id, text: a.text}))
    : [];

    const handleNextQuestion = () => {
		if (currentQuestionIndex === questions.length - 1) {
			setIsQuizOver(true);
		} else {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
		}
        setSelectedAnswer([]);
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
            {isQuizOver && <QuizResultsPage/>}
        </>
    )
}
