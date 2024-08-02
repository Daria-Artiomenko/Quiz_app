import { useAppSelector } from "../../hooks/redux";
import { StatsBlock } from "../statsBlock/StatsBlock";
import { TotalStatsBlock } from "../totalStatsBlock/totalStatsBlock";

export const Statistics: React.FC = () => {
    const {
        totalQuestionsAmount,
        totalCorrectAnswers,
        totalQuestionsByCategory,
        correctAnswersByCategory,
        totalQuestionsByDifficulty,
        correctAnswersByDifficulty,
        totalQuestionsByType,
        correctAnswersByType,
    } = useAppSelector((state) => state.stats);
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-5xl font-medium text-amber-500 mb-16 text-center w-2/3 mx-auto'>
                Statistics
            </h2>
            <div className='text-start mb-16'>
                <h3 className='text-xl font-light text-amber-500 mb-8'>
                    Overall
                </h3>
                <TotalStatsBlock totalStats={totalQuestionsAmount} />
                <TotalStatsBlock totalStats={totalCorrectAnswers} />
            </div>

            <div className='flex justify-between'>
                <StatsBlock
                    label='Total Questions by Category'
                    statsData={totalQuestionsByCategory}
                    correctAnswers={correctAnswersByCategory}
                />
                <StatsBlock
                    label='Total Questions by Difficulty'
                    statsData={totalQuestionsByDifficulty}
                    correctAnswers={correctAnswersByDifficulty}
                />
                <StatsBlock
                    label='Total Questions by Difficulty'
                    statsData={totalQuestionsByType}
                    correctAnswers={correctAnswersByType}
                />
            </div>
        </div>
    );
};
