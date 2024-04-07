import React from "react";

const Works = () => {
  return (
    <div
      className="flex flex-col items-center my-10 mx-4 sm:mx-10"
      id="works_id"
    >
      <div className="text-3xl sm:text-5xl font-extrabold">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Works{" "}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full max-w-lg mt-8">
        {/* Foodtech */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-dashed border-b-2 border-gray-500 p-4 sm:p-8">
          <span className="text-lg sm:text-2xl">Foodtech</span>
        </div>

        {/* Center dashed line */}
        <div className="hidden sm:block flex items-center">
          <hr className="border-dashed border-r-2 border-gray-500 h-12" />
        </div>

        {/* Fintech */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-dashed border-b-2 border-gray-500 p-4 sm:p-8">
          <span className="text-lg sm:text-2xl">Fintech</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full max-w-lg mt-8">
        {/* Traveltech */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-b-2 border-dashed border-gray-500 p-4 sm:p-8">
          <span className="text-lg sm:text-2xl">Traveltech</span>
        </div>

        {/* Center dashed line */}
        <div className="hidden sm:block flex items-center">
          <hr className="border-dashed border-r-2 border-gray-500 h-12" />
        </div>

        {/* Healthcare */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-b-2 border-dashed border-gray-500 p-4 sm:p-8">
          <span className="text-lg sm:text-2xl">Healthcare</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full max-w-lg mt-8">
        {/* Edtech */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-b-2 border-dashed border-gray-500 p-4 sm:p-8">
          <span className="text-lg sm:text-2xl">Edtech</span>
        </div>

        {/* Center dashed line */}
        <div className="hidden sm:block flex items-center">
          <hr className="border-dashed border-r-2 border-gray-500 h-12" />
        </div>

        {/* Ecom */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-b-2 border-dashed border-gray-500 p-4 sm:p-8">
          <span className="text-lg sm:text-2xl">Ecom</span>
        </div>
      </div>
    </div>
  );
};

export default Works;
