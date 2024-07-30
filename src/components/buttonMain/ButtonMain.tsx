import React from "react";

interface ButtonProps {
    onClick?: () => void;
    label: string;
    buttonType?: "button" | "submit" | "reset";
}

const ButtonMain: React.FC<ButtonProps> = ({ onClick, label, buttonType }) => {
    return (
        <button
            className='w-56 h-12 mt-10 bg-amber-500 rounded-md hover:bg-amber-700'
            onClick={onClick}
            type={buttonType}>
            {label}
        </button>
    );
};

export default ButtonMain;
