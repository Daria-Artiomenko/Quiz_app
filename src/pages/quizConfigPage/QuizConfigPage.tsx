import React from "react";
import QuizForm from "../../components/quizForm/QuizForm";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import { useNavigate } from "react-router-dom";
export const QuizConfigPage: React.FC = () => {
    const navigate = useNavigate();

    const handleViewStats = () => {
        navigate("/statistic");
    };
    return (
        <>
            <ButtonSecondary
                styles='w-56 h-12 mx-auto absolute top-5 right-5'
                onClick={handleViewStats}
                label='See My Stats'
            />
            <QuizForm />
        </>
    );
};
