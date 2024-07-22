import React, { useEffect, useState } from "react";

interface TimerProps {
    time: number;
    onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ time, onTimeUp }) => {
    const [formattedTime, setFormattedTime] = useState("00:00");

    useEffect(() => {
        const updateFormattedTime = () => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            setFormattedTime(`${padZero(minutes)}:${padZero(seconds)}`);
            if (time === 0) {
                onTimeUp();
            }
        };

        const interval = setInterval(updateFormattedTime, 1000);

        updateFormattedTime();

        return () => clearInterval(interval);
    }, [time, onTimeUp]);

    const padZero = (num: number) => {
        return num.toString().padStart(2, "0");
    };

    return (
        <div className='text-amber-500 absolute top-8 right-8 w-32 text-left text-xl'>
            Time: <span className='w-16'> {formattedTime}</span>
        </div>
    );
};

export default Timer;
