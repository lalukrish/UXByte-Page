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
      <div className="flex items-center justify-center mb-20 md:mb-10">
        <img
          src="assets/Vector.png"
          alt="UXByte Logo"
          className="h-6 w-6 mr-2"
        />
        <p className="text-center text-xl">Welcome to UXByte</p>
      </div>
      <div className="text-center mt-4 flex flex-col">
        <h1
          className="text-7xl md:text-9xl font-bold text-transparent whitespace-nowrap"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
        >
          UXBYTE
        </h1>
      </div>
      <div className="md:absolute md:mt-48 lg:mt-64">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <div className="flex flex-col md:flex-row text-4xl items-center">
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
      <div className="md:absolute md:mt-32 lg:mt-48">
        <div
          className="text-xl my-4 text-center text-s mx-3 md:mx-0"
          style={{ color: "#CBBAFB" }}
        >
          We bridge the gap between cutting-edge design and powerful
          development. From sleek websites &amp; intuitive apps we empower your
          brand to thrive in the ever-evolving digital landscape.{" "}
        </div>
      </div>
      <div className="md:mt-16">
        <button className="bg-white text-black py-3 px-4 flex rounded-lg hover:bg-gray-200 my-4">
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
