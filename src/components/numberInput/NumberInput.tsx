import React from "react";

interface NumberInputProps {
    label: string;
    value: string | null;
    onChange: (value: string) => void;
    min: number;
    max: number;
}

const NumberInput: React.FC<NumberInputProps> = ({
    label,
    value,
    onChange,
    min,
    max,
}) => {
    return (
        <div>
            <label
                className='mr-3 text-zinc-400 font-light'
                htmlFor={`input-${label}`}>
                {label}:
            </label>
            <input
                className='h-9 w-24 rounded-md text-white border-2 border-zinc-400 focus:border-amber-500 focus:outline-none text-center bg-zinc-900'
                id={`input-${label}`}
                type='number'
                min={min}
                max={max}
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default NumberInput;
