import React, { useState, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
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
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 via-white-100 to-black-100 py-16">
      <div className="mb-10">
        <div className="rounded-2xl px-12 py-8 shadow-2xl flex flex-col justify-center items-center bg-white/80 backdrop-blur-md border border-gray-200">
          <span className="text-3xl font-bold mb-4 text-gray-900 tracking-wide">
            Timer
          </span>
          <span className="text-6xl font-mono font-extrabold text-gray-800 drop-shadow-lg select-none">
            {formatTime(time)}
          </span>
        </div>
      </div>
      <div className="flex gap-6">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-8 py-3 rounded-full bg-gray-900 text-white font-bold text-lg shadow-md transition-all duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-200"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className="px-8 py-3 rounded-full bg-gray-900 text-white font-bold text-lg shadow-md transition-all duration-200 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-red-200"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-8 py-3 rounded-full bg-gray-900 text-white font-bold text-lg shadow-md transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
