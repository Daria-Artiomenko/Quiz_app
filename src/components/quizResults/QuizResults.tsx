import React from "react";
import ButtonMain from "../../components/buttonMain/ButtonMain";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearQuizData, startQuiz } from "../../features/quizQuestionSlice";
import { resetConfigQuiz } from "../../features/quizConfigSlice";

export const QuizResults: React.FC = () => {
    const dispatch = useAppDispatch();
    const quizConfig = useAppSelector((state) => state.quizConfig);
    const { numberOfQuestions, type, categoryText, time, difficulty } =
        quizConfig;
    const quizQuestion = useAppSelector((state) => state.quizQuestion);
    const { correctAnswers } = quizQuestion;
    const { startTime } = quizQuestion;

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds.padStart(2, "0")}`;
    };
    const timeSpent = startTime ? formatTime(Date.now() - startTime) : "0:00";

    const navigate = useNavigate();

    const onRestart = () => {
        dispatch(clearQuizData());
        dispatch(startQuiz());
        navigate("/quiz");
    };
    const onChooseAnother = () => {
        dispatch(resetConfigQuiz());
        dispatch(clearQuizData());
        navigate("/");
    };

    return (
        <div>
            <h2 className='text-3xl font-medium text-amber-500 mb-16 text-center w-2/3 mx-auto'>
                Thank you for completing this quiz!
                <br /> Here are your results
            </h2>
            <p className='text-xl font-light text-zinc-200 text-center mb-4'>
                You answered &#x20;
                <span className='font-medium text-amber-500'>
                    {correctAnswers}
                </span>
                &#x20; out of &#x20;
                <span className='font-medium text-amber-500'>
                    {numberOfQuestions}
                </span>
                &#x20; questions correctly.
            </p>
            <div className='flex flex-col gap-2 text-xl font-light text-zinc-200 text-center'>
                <p>
                    <span className='font-medium text-amber-500'>Type: </span>
                    {type}
                </p>
                <p>
                    <span className='font-medium text-amber-500'>
                        Category: &#x20;
                    </span>
                    {categoryText}
                </p>
                <p>
                    <span className='font-medium text-amber-500'>
                        Time spent: &#x20;
                    </span>
                    {timeSpent}
                </p>
                <p>
                    <span className='font-medium text-amber-500'>
                        Time: &#x20;
                    </span>
                    {time} minutes
                </p>

                <p>
                    <span className='font-medium text-amber-500'>
                        Difficulty: &#x20;
                    </span>
                    {difficulty}
                </p>
            </div>

            <div className='flex justify-center mt-4 gap-4'>
                <ButtonMain onClick={onRestart} label='Restart' />
                <ButtonMain
                    onClick={onChooseAnother}
                    label='Choose Another Quiz'
                />
            </div>
        </div>
    );
};
