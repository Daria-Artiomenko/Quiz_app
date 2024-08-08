import React from "react";
import AnswerOptions from "../answerOptions/AnswerOptions";
import { motion, AnimatePresence } from "framer-motion";

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
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className='text-3xl font-medium text-zinc-200 mb-16 text-center w-2/3 mx-auto'>
                    {question}

                    <div className='w-2/3 mx-auto mt-16'>
                        <AnswerOptions
                            type={type}
                            answers={answers}
                            onAnswerSelect={onAnswerSelect}
                            userAnswer={userAnswer}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Question;
