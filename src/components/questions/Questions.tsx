import React from "react";
import AnswerOptions from "../answerOptions/AnswerOptions";

interface QuestionProps {
    question: string;
    category: string;
    type: "multiple" | "boolean";
    answers: string[];
    onAnswerSelect: (answer: string) => void;
    userAnswer: string | null;
}

const Question: React.FC<QuestionProps> = ({
    question,
    type,
    answers,
    onAnswerSelect,
    userAnswer,
}) => {
    return (
        <div className='h-3/4'>
            <div className='text-3xl font-medium text-zinc-200 mb-16 text-center w-2/3 mx-auto'>
                {question}
            </div>
            <div className='w-2/3 mx-auto'>
                <AnswerOptions
                    type={type}
                    answers={answers}
                    onAnswerSelect={onAnswerSelect}
                    userAnswer={userAnswer}
                />
            </div>
        </div>
    );
};

export default Question;
