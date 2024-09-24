
"use client";
import React, { useState } from "react";

const SimpleCounter: React.FC = () => {
  // State for the counter value
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default SimpleCounter;
