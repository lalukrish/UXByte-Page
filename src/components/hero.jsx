import { BsFillLightningChargeFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse farthest-side at center, #240247, #0f0f0f 90%, transparent 100%)",
        backgroundSize: "100% 100%", // Adjust the width and height as needed
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center mb-80 absolute">
        <div className="flex md:mb-20">
          <img
            src="assets/Vector.png"
            alt="UXByte Logo"
            className="h-6 w-6 mr-2 "
          />
          <p className="text-center text-xl ">Welcome to UXByte</p>
        </div>
      </div>
      <div className="text-center mt-4  flex flex-col">
        <h1
          className="text-7xl font-bold text-transparent ml-0 md:text-9xl mt-36 md:mt-16 whitespace-nowrap"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
        >
          UXBYTE
        </h1>
      </div>
      <div className="md:absolute md:mt-96">
        <div className="flex flex-col md:flex-row items-center justify-center  ">
          <div className="flex flex-col md:flex-row text-4xl items-center">
            <span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent ">
                Code{" "}
              </span>
              the Future.{" "}
            </span>
            <span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
                Craft
              </span>{" "}
              the Experience.
            </span>
          </div>
        </div>
      </div>
      <div className=" md:mt-96 md:absolute">
        <div className=" md:mt-32">
          <div
            className="text-xl my-4 text-center text-s mx-3 md:mx-0 "
            style={{ color: "#CBBAFB" }}
          >
            We bridge the gap between cutting-edge design and powerful
            development. From sleek websites & <br></br> intuitive apps we
            empower your brand to thrive in the ever-evolving digital landscape.{" "}
          </div>
        </div>
      </div>
      <div className=" md:mt-16 ">
        <button className="bg-white text-black py-3 px-4 flex rounded-lg rwz hover:bg-gray-200   my-4">
          Let's Connect
          <span className=" mx-2 my-1 ">
            <BsFillLightningChargeFill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
