import { useNavigate } from "react-router-dom";
import { paths } from "../../App";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import { Statistics } from "../../components/statistics/Statistics";

export const StatisticPage: React.FC = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(paths.quizConfig);
    };
    return (
        <>
            <ButtonSecondary
                styles='w-10 border-none h-12 mx-auto absolute top-8 left-10'
                onClick={handleBack}
                label='Back'
            />
            <Statistics />
        </>
    );
};
