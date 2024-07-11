import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  onClick: () => void;
  label: string;
  styles?: string;
}

const ButtonSecondary: React.FC<ButtonProps> = ({ onClick, label, styles }) => {
  const buttonClasses = classNames(
    'text-amber-500 block border-2 border-amber-500 rounded-md hover:bg-amber-700 hover:text-black hover:border-none',
    styles
  );
  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default ButtonSecondary;