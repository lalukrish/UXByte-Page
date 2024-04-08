import { BsFillLightningChargeFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(ellipse farthest-side at center, #240247, #0f0f0f 90%, transparent 100%)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex items-center justify-center   absolute "
        style={{ marginBottom: 560 }}
      >
        <img
          src="assets/Vector.png"
          alt="UXByte Logo"
          className="h-6 w-6 mr-2"
        />
        <p className="  text-center text-lg md:text-2xl">Welcome to UXByte</p>
      </div>
      <h1
        className="text-7xl md:text-9xl font-bold text-transparent whitespace-nowrap md:mb-20"
        style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
      >
        UXBYTE
      </h1>

      <div className="md:absolute ">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <div className="flex flex-col md:flex-row text-4xl items-center md:mt-10 lg:mt-40 font-bold ">
            <span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
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
      <div className="md:absolute">
        <div
          className="text-xs md:text-1xl  text-center mx-3 md:mx-0  md:px-72  md:mt-80 my-4 text-xl"
          style={{ color: "#CBBAFB" }}
        >
          We bridge the gap between cutting-edge design and powerful
          development. From sleek websites & intuitive apps we empower your
          brand to thrive in the ever-evolving digital landscape.
        </div>
      </div>
      <div className="mt-8  md:mt-6 md:mb-20">
        <button
          className="bg-white text-black py-4 px-6 flex rounded-lg hover:bg-gray-200 my-4 md:my-0 font-semibold"
          onClick={() => {
            console.log("object");
          }}
        >
          Let's Connect
          <span className="mx-2 my-1">
            <BsFillLightningChargeFill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
