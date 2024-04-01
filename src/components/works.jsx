import React from "react";

const Works = () => {
  return (
    <div className="flex flex-col items-center my-10 mx-10">
      <div className="text-5xl font-extrabold">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Works{" "}
        </span>
      </div>

      {/* Horizontal dashed line */}
      {/* <div className="w-full my-8">
        <hr className="border-dashed border-b-2 border-gray-500" />
      </div> */}

      {/* Content */}
      <div className="flex flex-row justify-between w-full max-w-lg">
        {/* Left content */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-dashed border-b-2 border-gray-500 p-8">
          <span className="text-2xl">Foodtech</span>{" "}
        </div>

        {/* Center dashed line */}
        <div className="flex items-center">
          <hr className="border-dashed border-r-2 border-gray-500 h-32 mt-6 " />
        </div>

        {/* Right content */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-dashed border-b-2 border-gray-500 p-8">
          <span className="text-2xl">Fintech</span>{" "}
        </div>
      </div>
      {/* second  cotnet*/}
      <div className="flex flex-row justify-between w-full max-w-lg">
        {/* Left content */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-b-2 border-dashed border-gray-500 p-8">
          <span className="text-2xl">Traveltech</span>{" "}
        </div>

        {/* Center dashed line */}
        <div className="flex items-center">
          <hr className="border-dashed border-r-2 border-gray-500 h-12  absolute" />
        </div>

        {/* Right content */}
        <div className="flex flex-col items-center justify-center border border-t-0 border-r-0 border-l-0 border-b-2 border-dashed border-gray-500 p-8">
          <span className="text-2xl">Healthcare</span>{" "}
        </div>
      </div>
      {/* third  cotnet*/}

      <div className="flex flex-row justify-between w-full max-w-lg">
        {/* Left content */}
        <div className="flex flex-col items-center justify-center  p-8">
          <span className="text-2xl">Edtech</span>{" "}
        </div>

        {/* Center dashed line */}
        <div className="flex items-center">
          <hr className="border-dashed border-r-2 border-gray-500 h-36 absolute" />
        </div>

        {/* Right content */}
        <div className="flex flex-col items-center justify-center  p-8">
          <span className="text-2xl">Ecom</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Works;
