import React, { useState, useRef } from 'react';

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    React.useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="flex flex-col items-center mt-12" style={{ backgroundColor: '#F4E3F6', minHeight: '100vh' }}>
            <div className="mb-8">
                <div
                    className="rounded-lg px-8 py-4 shadow-lg flex flex-col justify-center items-center"
                    style={{ backgroundColor: '#F4E3F6' }}
                >
                    <span className="text-2xl font-semibold mb-2" style={{ color: '#bc8bc2' }}>
                        Timer
                    </span>
                    <span className="text-5xl font-mono font-bold" style={{ color: '#fff' }}>
                        {formatTime(time)}
                    </span>
                </div>
            </div>
            <div className="space-x-4">
                <button
                    onClick={startTimer}
                    disabled={isRunning}
                    className="px-6 py-2 rounded bg-green-500 text-white font-semibold transition-colors duration-200 hover:bg-green-600 disabled:opacity-50"
                >
                    Start
                </button>
                <button
                    onClick={stopTimer}
                    disabled={!isRunning}
                    className="px-6 py-2 rounded bg-red-500 text-white font-semibold transition-colors duration-200 hover:bg-red-600 disabled:opacity-50"
                >
                    Stop
                </button>
                <button
                    onClick={resetTimer}
                    className="px-6 py-2 rounded bg-gray-300 text-black font-semibold transition-colors duration-200 hover:bg-gray-400"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default StopWatch;