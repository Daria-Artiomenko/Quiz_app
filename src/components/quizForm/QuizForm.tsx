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

interface Option {
    value: string;
    label: string;
}

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

    const categories: Option[] = [
        { value: "9", label: "General Knowledge" },
        { value: "10", label: "Entertainment: Books" },
        { value: "11", label: "Entertainment: Film" },
        { value: "12", label: "Entertainment: Music" },
        { value: "13", label: "Entertainment: Musicals & Theatres" },
        { value: "14", label: "Entertainment: Television" },
        { value: "15", label: "Entertainment: Video Games" },
        { value: "16", label: "Entertainment: Board Games" },
        { value: "18", label: "Science: Computers" },
        { value: "19", label: "Science: Mathematics" },
        { value: "20", label: "Mythology" },
        { value: "21", label: "Sports" },
        { value: "22", label: "Geography" },
        { value: "23", label: "History" },
    ];

    const difficulties: Option[] = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
    ];

    const types: Option[] = [
        { value: "multiple", label: "Multiple Choice" },
        { value: "boolean", label: "True/False" },
    ];

    const times: Option[] = [
        { value: "1", label: "1 minute" },
        { value: "2", label: "2 minutes" },
        { value: "5", label: "5 minutes" },
    ];

    const handleButtonClick = () => {
        dispatch(
            setCategoryText(
                categories.map((cat: Option) => {
                    if (cat.value === category) {
                        return cat.label;
                    } else {
                        return null;
                    }
                })
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
