import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const ButtonMain: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <button className='w-56 h-12 mt-10 bg-amber-500 rounded-md hover:bg-amber-700' onClick={onClick}>{label}</button>;
};


export default ButtonMain;