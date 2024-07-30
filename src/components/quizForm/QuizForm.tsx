import React from "react";
import NumberInput from "../numberInput/NumberInput";
import SelectInput from "../selectInput/SelectInput";
import ButtonMain from "../buttonMain/ButtonMain";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    setCategory,
    setDifficulty,
    setNumberOfQuestions,
    setTime,
    setType,
} from "../../features/quizConfigSlice";
import { useGetQuestionsQuery } from "../../services/getQuestions";

interface Option {
    value: string;
    label: string;
}

export const QuizForm: React.FC = () => {
    const quizConfig = useAppSelector((state) => state.quizConfig);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { numberOfQuestions, category, difficulty, type, time } = quizConfig;
    const { data, isLoading } = useGetQuestionsQuery(
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
        { value: "any", label: "Any Category" },
        { value: "9", label: "Animals" },
        { value: "10", label: "Books" },
    ];

    const difficulties: Option[] = [
        { value: "any", label: "Any Difficulty" },
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
    ];

    const types: Option[] = [
        { value: "any", label: "Any Type" },
        { value: "multiple", label: "Multiple Choice" },
        { value: "boolean", label: "True/False" },
    ];

    const times: Option[] = [
        { value: "1m", label: "1 minute" },
        { value: "2m", label: "2 minutes" },
        { value: "5m", label: "5 minutes" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
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
            />
        </form>
    );
};

export default QuizForm;
