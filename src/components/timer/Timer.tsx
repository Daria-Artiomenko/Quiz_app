import React, { useEffect, useState } from 'react';

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const [formattedTime, setFormattedTime] = useState('00:00');

  useEffect(() => {
    const updateFormattedTime = () => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      setFormattedTime(`${padZero(minutes)}:${padZero(seconds)}`);
    };

    const interval = setInterval(updateFormattedTime, 1000);

    updateFormattedTime();

    return () => clearInterval(interval);
  }, [time]);

  const padZero = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return <div className='text-amber-500 absolute top-8 right-8'>Time: {formattedTime}</div>;
};

export default Timer;

// const Timer: React.FC<TimerProps> = ({ time }) => {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       // 
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (timeInSeconds: number) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//   };

//   return <div className='text-amber-500 absolute top-8 right-8'>Time: {formatTime(time)}</div>;
// };

// export default Timer;