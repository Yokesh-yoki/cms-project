import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                const res = Function('"use strict";return (' + input + ')')();
                setResult(String(res));
                setInput(String(res));
            } catch (err) {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', 'C', '+'],
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-80">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 tracking-wide">Calculator</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={input}
                        readOnly
                        className="w-full p-4 text-2xl text-right font-mono border-none rounded-xl bg-gray-100 focus:outline-none shadow-inner"
                    />
                </div>
                <div className="grid grid-cols-4 gap-3 mb-3">
                    {buttons.flat().map((btn, idx) => (
                        <button
                            key={idx}
                            className={
                                `py-3 rounded-xl text-xl font-bold shadow-sm transition-all duration-150 ` +
                                (btn === '='
                                    ? 'hidden'
                                    : btn === 'C'
                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                    : '/-*+'.includes(btn)
                                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300')
                            }
                            onClick={() => handleClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
                <button
                    className="w-full py-3 mt-2 rounded-xl bg-blue-600 text-white text-xl font-bold shadow-md hover:bg-blue-700 transition-all duration-150"
                    onClick={() => handleClick('=')}
                >
                    =
                </button>
                {result && (
                    <div className="mt-4 text-right text-lg text-green-600 font-semibold font-mono">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Calculator;