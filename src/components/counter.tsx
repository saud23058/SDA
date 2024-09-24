
"use client";



import React from "react";

const Counter: React.FC = () => {


  return (
    <div className="w-full h-full flex flex-col items-center justify-center  bg-gray-100">
      <h1 className="">BLOC PATTERN</h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter: {}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => {}}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => {}}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
        
      </div>
    </div>
  );
};

export default Counter;
