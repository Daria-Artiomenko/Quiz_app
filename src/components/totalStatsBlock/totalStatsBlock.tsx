interface totalStatsBlockProps {
    totalStats: number;
}
export const TotalStatsBlock: React.FC<totalStatsBlockProps> = ({
    totalStats,
}) => {
    return (
        <p className='text-m font-light text-zinc-200'>
            Total questions:{" "}
            <span className='text-m font-light text-zinc-400'>
                {totalStats}
            </span>
        </p>
    );
};
