interface ResultRowProps {
    type: string | null;
    text: string | null;
}
export const ResultRow: React.FC<ResultRowProps> = ({ type, text }) => {
    return (
        <p>
            <span className='font-medium text-amber-500'>{type}</span>
            {text}
        </p>
    );
};
