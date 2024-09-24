
"use client";



import { CounterBloc } from "@/bloc/bloc";
import React from "react";

const Counter: React.FC = () => {

  const {state,onEvent}=CounterBloc()

  return (
    <div className="w-full h-full flex flex-col items-center justify-center  bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">BLOC PATTERN</h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter: {state.count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => {onEvent('INCREMENT')}}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => {onEvent('DECREMENT')}}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
        <button
          onClick={() => {onEvent('MUL')}}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          MUL
        </button>
      </div>
    </div>
  );
};

export default Counter;
