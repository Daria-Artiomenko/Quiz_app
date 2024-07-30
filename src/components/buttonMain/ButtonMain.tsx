import React from "react";

interface ButtonProps {
    label: string;
    buttonType?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

const ButtonMain: React.FC<ButtonProps> = ({
    onClick,
    label,
    buttonType,
    disabled,
}) => {
    return (
        <button
            className='w-56 h-12 mt-10 bg-amber-500 rounded-md hover:bg-amber-700'
            onClick={onClick}
            type={buttonType}
            disabled={disabled}>
            {label}
        </button>
    );
};

export default ButtonMain;
