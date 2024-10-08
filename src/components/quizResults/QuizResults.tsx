import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ButtonMain from "../../components/buttonMain/ButtonMain";
import { clearQuizData, startQuiz } from "../../features/quizQuestionSlice";
import { resetConfigQuiz } from "../../features/quizConfigSlice";
import { incrementStats, StatisticType } from "../../features/statsSlice";
import { ResultRow } from "../resultRow/ResultRow";
import { paths } from "../../App";

export const getTimeSpent = (startTime: number | null) => {
    if (!startTime) return "0:00";
    const timeSpent = Date.now() - startTime;
    const minutes = Math.floor(timeSpent / 60000);
    const seconds = ((timeSpent % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
};

export const QuizResults: React.FC = () => {
    const dispatch = useAppDispatch();
    const { numberOfQuestions, type, categoryText, time, difficulty } =
        useAppSelector((state) => state.quizConfig);
    const { correctAnswers, startTime } = useAppSelector(
        (state) => state.quizQuestion
    );

    const timeSpent = getTimeSpent(startTime);

    const navigate = useNavigate();

    const updateStats = () => {
        dispatch(
            incrementStats({
                type: StatisticType.Category,
                key: categoryText || "",
                amount: +(numberOfQuestions ?? 0),
                correctAnswers: correctAnswers,
            })
        );
        dispatch(
            incrementStats({
                type: StatisticType.Difficulty,
                key: difficulty || "",
                amount: +(numberOfQuestions ?? 0),
                correctAnswers: correctAnswers,
            })
        );
        dispatch(
            incrementStats({
                type: StatisticType.Type,
                key: type || "",
                amount: +(numberOfQuestions ?? 0),
                correctAnswers: correctAnswers,
            })
        );
    };

    const onRestart = () => {
        updateStats();
        dispatch(clearQuizData());
        dispatch(startQuiz());
        navigate(paths.quiz);
    };

    const onChooseAnother = () => {
        updateStats();
        dispatch(resetConfigQuiz());
        dispatch(clearQuizData());
        navigate(paths.quizConfig);
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
                <ResultRow type='Type: ' text={type} />
                <ResultRow type='Category: ' text={categoryText} />
                <ResultRow type='Time spent: ' text={timeSpent} />
                <ResultRow type='Time: ' text={`${time} minutes`} />
                <ResultRow type='Difficulty: ' text={difficulty} />
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
