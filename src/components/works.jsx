import React from "react";

const Works = ({ theme, toggleTheme }) => {
  // const crossesContainerStyle = {
  //   "@media (max-width: 640px)": {
  //     flexDirection: "column",
  //   },
  //   "@media (min-width: 768px)": {
  //     flexDirection: "row",
  //   },
  // };
  const textColor = theme === "light" ? "text-black" : "text-white";
  const buttonColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-[#0f0f0f]"; // Adjust background color based on theme

  return (
    <div className={`"hidden md:block" ${textColor} ${backgroundColor} `}>
      <div className="text-6xl font-extrabold  text-center" id="works_id">
        <div
          className="absolute md:my-20  inset-x-0"
          style={{ textAlign: "center" }}
        >
          {" "}
          <span className=" bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
            Works{" "}
          </span>
        </div>
      </div>
      <div className="md:block  mr-28">
        <div className="flex justify-center items-center h-screen">
          <div className="relative flex">
            {/* First Cross */}
            <div
              className="relative "
              style={{ width: "32rem", height: "16rem" }}
            >
              <div className="absolute bg-transparent w-full h-1/3 top-1/2 left-0 transform -translate-y-1/2 border-b  border-dashed border-white  flex justify-center items-center ml-4">
                <div
                  className=" absolute text-4xl mb-12"
                  style={{ marginLeft: 1500, fontWeight: 600 }}
                >
                  {" "}
                  Edtech
                </div>
              </div>
              <div className="absolute bg-transparent h-full w-1/12 top-0 left-1/2 transform -translate-x-1/2 border-r border-dashed border-white my-12 ml-16"></div>
            </div>
            {/* Second Cross */}
            <div
              className="relative "
              style={{ width: "40rem", height: "16rem" }}
            >
              <div className="absolute bg-transparent w-full h-1/3 top-1/2 left-0 transform -translate-y-1/2 border-b border-dashed border-white ml-4"></div>
              <div></div>
              <div className="absolute bg-transparent h-full w-1/3 top-0 left-1/3 transform -translate-x-1/2 border-r border-dashed border-white my-12">
                <div
                  className="absolute my-5 text-4xl right-44 "
                  style={{ fontWeight: 600 }}
                >
                  Fintech
                </div>
              </div>
            </div>
            <div
              className="absolute my-16 text-4xl  ml-8 "
              style={{ fontWeight: 600 }}
            >
              Foodtech
            </div>
            <div
              className="absolute ml-8  text-4xl"
              style={{ marginTop: 220, fontWeight: 600 }}
            >
              Traveltech
            </div>
            <div
              className="absolute   text-4xl"
              style={{ marginTop: 220, fontWeight: 600, marginLeft: 485 }}
            >
              Healthcare
            </div>
            <div
              className="absolute   text-4xl "
              style={{ marginTop: 220, fontWeight: 600, marginLeft: 960 }}
            >
              Ecom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
