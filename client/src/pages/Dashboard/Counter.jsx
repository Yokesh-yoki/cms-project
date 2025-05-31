import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [animate, setAnimate] = useState(false);

    const handleClick = (type) => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 200);

        if (type === 'inc') {
            setCount(count + 1);
        } else {
            setCount(prev => (prev > 0 ? prev - 1 : 0));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <h1 className="text-3xl font-bold mb-6">Counter</h1>

            <div
                className={`text-6xl font-bold text-blue-600 mb-8 transform transition-all duration-200 ease-out ${
                    animate ? 'scale-110 opacity-80' : 'scale-100 opacity-100'
                }`}
            >
                {count}
            </div>

            <div className="flex gap-6">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg"
                    onClick={() => handleClick('inc')}
                >
                    Increment
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl text-lg"
                    onClick={() => handleClick('dec')}
                    disabled={count === 0}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
