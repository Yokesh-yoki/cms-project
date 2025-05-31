import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = (type) => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200);

    if (type === "inc") {
      setCount(count + 1);
    } else {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 drop-shadow-lg tracking-wide">
        Counter
      </h1>

      <div
        className={`text-7xl font-extrabold text-gray-600 mb-10 rounded-2xl shadow-lg bg-white px-16 py-8 transition-all duration-200 ease-out ${
          animate
            ? "scale-110 opacity-80 ring-4 ring-gray-300"
            : "scale-100 opacity-100"
        }`}
      >
        {count}
      </div>

      <div className="flex gap-8">
        <button
          className="bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-900 hover:to-gray-700 text-white px-8 py-3 rounded-xl text-xl font-semibold shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => handleClick("inc")}
        >
          Increment
        </button>
        <button
          className={`bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-900 hover:to-gray-700 text-white px-8 py-3 rounded-xl text-xl font-semibold shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
            count === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleClick("dec")}
          disabled={count === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
