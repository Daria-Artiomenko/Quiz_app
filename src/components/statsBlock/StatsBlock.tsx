interface StatsBlockProps {
    label: string;
    statsData: {
        [key: string]: number;
    };
    correctAnswers: {
        [key: string]: number;
    };
}

export const StatsBlock: React.FC<StatsBlockProps> = ({
    label,
    statsData,
    correctAnswers,
}) => {
    return (
        <div>
            <h3 className='text-xl font-light text-amber-500 mb-8'>{label}:</h3>
            <div className='text-m font-light text-zinc-200 flex flex-col align-start text-start'>
                {Object.entries(statsData).map(([key, value]) => (
                    <p className='mb-4' key={key}>
                        {key}:<br />
                        <span className='text-m font-light text-zinc-400'>
                            Total questions: {value}
                            <br />
                            Correct answers: {correctAnswers[key]}
                            <br />
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
};
