import React from "react";

interface AnswerOptionsProps {
    type: "multiple" | "boolean";
    answers: string[];
    onAnswerSelect: (answer: string) => void;
    userAnswer: string | null;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
    type,
    answers,
    onAnswerSelect,
    userAnswer,
}) => {
    const handleAnswerSelect = (answer: string) => {
        onAnswerSelect(answer);
    };

    return (
        <div className='flex flex-col gap-4 align-start justify-start'>
            {answers.map((answer) => (
                <div
                    key={answer}
                    className='text-xl font-light text-zinc-400 text-start'>
                    <label htmlFor={answer}>
                        <input
                            id={answer}
                            className='mr-2 w-4 h-4 rounded-md accent-amber-500'
                            type={type === "multiple" ? "checkbox" : "radio"}
                            checked={userAnswer === answer}
                            onChange={() => handleAnswerSelect(answer)}
                        />
                        {answer}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default AnswerOptions;
