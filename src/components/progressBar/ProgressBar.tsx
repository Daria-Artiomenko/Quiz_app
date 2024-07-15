import React from 'react';

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex, totalQuestions }) => {
  const progress = (currentIndex + 1) / totalQuestions * 100;

  return (
    <div>
      <div className="h-3 w-80 bg-zinc-300 rounded-full">
        <div
          className="h-3 bg-amber-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-center text-zinc-400 font-light mt-2">
        Question {currentIndex + 1} out of {totalQuestions}
      </div>
    </div>
  );
};

export default ProgressBar;