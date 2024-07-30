import React from "react";
import NumberInput from "../numberInput/NumberInput";
import SelectInput from "../selectInput/SelectInput";
import ButtonMain from "../buttonMain/ButtonMain";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    setCategory,
    setCategoryText,
    setDifficulty,
    setNumberOfQuestions,
    setTime,
    setType,
} from "../../features/quizConfigSlice";
import { useGetQuestionsQuery } from "../../services/getQuestions";
import { startQuiz } from "../../features/quizQuestionSlice";
import { categories, difficulties, types, times } from "../../data/constants";

export const QuizForm: React.FC = () => {
    const quizConfig = useAppSelector((state) => state.quizConfig);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { numberOfQuestions, category, difficulty, type, time } = quizConfig;
    const { isLoading, error } = useGetQuestionsQuery(
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

    const handleButtonClick = () => {
        dispatch(
            setCategoryText(
                categories.find((cat) => cat.value === category)?.label || ""
            )
        );
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(startQuiz());
        navigate("/quiz");
    };

    return (
        <form className='w-2/5 mx-auto' onSubmit={handleSubmit}>
            <h2 className='text-5xl font-bold text-amber-500 mb-16'>
                Create your Quiz
            </h2>
            <NumberInput
                label='Number of Questions'
                value={numberOfQuestions}
                onChange={(value) => dispatch(setNumberOfQuestions(value))}
                min={5}
                max={15}
            />
            <SelectInput
                label='Category'
                value={categories.find((cat) => cat.value === category) || null}
                onChange={(value) =>
                    dispatch(setCategory(value?.value || null))
                }
                options={categories}
            />
            <SelectInput
                label='Difficulty'
                value={
                    difficulties.find((diff) => diff.value === difficulty) ||
                    null
                }
                onChange={(value) =>
                    dispatch(setDifficulty(value?.value || null))
                }
                options={difficulties}
            />
            <SelectInput
                label='Type'
                value={types.find((t) => t.value === type) || null}
                onChange={(value) => dispatch(setType(value?.value || null))}
                options={types}
            />
            <SelectInput
                label='Time'
                value={times.find((t) => t.value === time) || null}
                onChange={(value) => dispatch(setTime(value?.value || null))}
                options={times}
            />

            <ButtonMain
                buttonType='submit'
                label={isLoading ? "Loading..." : "Start Quiz"}
                disabled={!!isLoading || !!error}
                onClick={handleButtonClick}
            />
            {error && (
                <p className='text-red-500'>
                    Something went wrong.
                    <br />
                    Try to change the parameters of the quiz.
                </p>
            )}
        </form>
    );
};

export default QuizForm;
