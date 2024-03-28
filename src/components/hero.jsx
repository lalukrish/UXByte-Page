import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="flex items-center justify-center mt-12 ">
        <img
          src="assets/Vector.png"
          alt="UXByte Logo"
          className="h-6 w-6 mr-2"
        />
        <p className="text-center text-xl ">Welcome to UXByte</p>
      </div>
      <div className="text-center">
        <h1
          className="text-[296px] font-bold text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
        >
          UXBYTE
        </h1>{" "}
      </div>
      <div className="text-4xl">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Code{" "}
        </span>
        the Future.{" "}
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Craft{" "}
        </span>
        the Experience.
      </div>
      <div className="text-xl my-4 text-center text-s">
        We bridge the gap between cutting-edge design and powerful development.
        From sleek websites &<br></br> intuitive apps we empower your brand to
        thrive in the ever-evolving digital landscape.{" "}
      </div>
    </div>
  );
};


export default Hero;