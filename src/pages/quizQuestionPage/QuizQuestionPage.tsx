import React, { useState, useEffect } from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Question from "../../components/questions/Questions";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import ButtonMain from "../../components/buttonMain/ButtonMain";
import Timer from "../../components/timer/Timer";
import { ModalWindow } from "../../components/modalWindow/ModalWindow";

import { useGetQuestionsQuery } from "../../services/getQuestions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    setQuestions,
    setUserAnswer,
    checkAnswer,
    goToNextQuestion,
} from "../../features/quizQuestionSlice";

export const QuizQuestionPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const quizConfig = useAppSelector((state) => state.quizConfig);
    const { numberOfQuestions, category, difficulty, type, time } = quizConfig;
    const [quizTime, setQuizTime] = useState(time ? +time * 60 : 0);

    const dispatch = useAppDispatch();
    const { questions, currentQuestionIndex, userAnswer, correctAnswers } =
        useAppSelector((state) => state.quizQuestion);

    const { data } = useGetQuestionsQuery(
        {
            numberOfQuestions,
            category,
            difficulty,
            type,
        },
        {
            skip: !numberOfQuestions || !category || !difficulty || !type,
        }
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setQuizTime((prevTime) => {
                if (prevTime === 0) {
                    navigate("/results", { state: { correctAnswers } });
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(setQuestions(data));
        }
    }, [data, dispatch]);
    const currentQuestion = data?.[currentQuestionIndex];
    const currentQuestionAnswers = currentQuestion
        ? [
              currentQuestion.correct_answer,
              ...(currentQuestion.incorrect_answers || []),
          ].sort()
        : [];
    const handleAnswerSelect = (answer: string) => {
        dispatch(setUserAnswer(answer));
    };
    const handleNextQuestion = () => {
        dispatch(checkAnswer());
        if (currentQuestionIndex === questions.length - 1) {
            navigate("/results", { state: { correctAnswers } });
        } else {
            dispatch(goToNextQuestion());
        }
    };

    const handleEndQuiz = () => {
        setShowModal(true);
    };
    const handleCancelEndQuiz = () => {
        setShowModal(false);
    };
    const handleGotoResults = () => {
        navigate("/results", { state: { correctAnswers } });
    };
    return (
        <>
            {data && currentQuestion && (
                <>
                    <Timer time={quizTime} onTimeUp={handleGotoResults} />
                    <Question
                        key={currentQuestion.question}
                        question={currentQuestion.question}
                        category={currentQuestion.category}
                        type={currentQuestion.type as "boolean" | "multiple"}
                        answers={currentQuestionAnswers}
                        onAnswerSelect={handleAnswerSelect}
                        userAnswer={userAnswer}
                    />

                    <div className='flex gap-4 mb-16 justify-center'>
                        <ButtonMain onClick={handleNextQuestion} label='Next' />

                        <ButtonSecondary
                            onClick={handleEndQuiz}
                            label='End Quiz'
                            styles='w-32 h-12 mt-10'
                        />
                        <ModalWindow
                            isOpen={showModal}
                            onCancel={handleCancelEndQuiz}
                            onConfirm={handleGotoResults}>
                            <p className='text-xl font-medium text-amber-500 mb-4 text-center'>
                                Are you sure you want to end the quiz?
                            </p>
                        </ModalWindow>
                    </div>
                    <ProgressBar
                        currentIndex={currentQuestionIndex}
                        totalQuestions={data.length}
                    />
                </>
            )}
        </>
    );
};
