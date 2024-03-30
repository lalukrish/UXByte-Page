import React from "react";

const Works = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-extrabold mb-8">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Tic Tac Toe
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* First row */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-dotted-[2px] border-white p-8">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center justify-center border border-dotted border-white border-t-0 p-4">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center justify-center border border-dotted border-white border-t-0 p-4 border-r-0 border-l-0">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
        </div>
        {/* Second row */}
        <div className="flex flex-col items-center justify-center border border-dotted border-white p-4 border-t-0 border-r-0 border-b-0 border-l-0 py-[-10]">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center justify-center border border-dotted border-white p-4 border-t-0 border-b-0">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center justify-center border border-dotted border-white p-4 border-t-0 border-b-0 border-r-0 border-l-0">
          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
