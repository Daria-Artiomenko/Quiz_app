import React from "react";
import Select from "react-select";

interface Option {
    value: string;
    label: string;
}

interface SelectInputProps {
    label: string;
    value: Option | null;
    onChange: (option: Option | null) => void;
    options: Option[];
}

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    value,
    onChange,
    options,
}) => {
    return (
        <div className='my-4 text-left'>
            <label
                className='text-s text-left text-zinc-400 font-light'
                htmlFor={`select-${label}`}>
                {label}:
            </label>
            <Select
                className='mt-1'
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary25: "orange",
                        primary: "orange",
                    },
                })}
                id={`select-${label}`}
                options={options}
                value={value}
                onChange={(option: Option | null) => onChange(option)}
            />
        </div>
    );
};

export default SelectInput;
