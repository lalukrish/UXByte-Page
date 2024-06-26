import { BsFillLightningChargeFill } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Hero = ({ theme, toggleTheme }) => {
  const textColor = theme === "light" ? "text-black" : "text-white";
  const buttonColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-[#0f0f0f]"; // Adjust background color based on theme

  const descriptionColor = theme === "light" ? "#6000AD" : "#CBBAFB";
  const router = useRouter();
  const handleConnect = () => {
    router.push("/contact-us");
  };
  const colorsChangeButton =
    theme === "light" ? "bg-black text-white" : "bg-white text-black";

  // const controls = useAnimation();
  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({
  //       x: [10, 40, 70, 90],
  //       y: [50, 20, 50, 20],
  //       transition: { duration: 8, loop: Infinity },
  //     });
  //   }
  // }, [controls, inView]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen  ${textColor} ${backgroundColor}`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "radial-gradient(ellipse farthest-side at center, #240247, #0f0f0f 90%, transparent 100%)"
            : "none",

        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex items-center justify-center   absolute "
        style={{ marginBottom: 560 }}
      >
        <Image
          src="/assets/Vector.png"
          alt="UXByte Logo"
          className="h-6 w-6 mr-2"
          width={6}
          height={10}
        />
        <p className="  text-center text-lg md:text-2xl">Welcome to UXByte</p>
      </div>
      <h1
        className="text-7xl md:text-9xl font-bold text-transparent whitespace-nowrap md:mb-20"
        style={{
          WebkitTextStroke:
            theme === "dark"
              ? "1px rgba(255, 255, 255, 0.2)"
              : "1px rgba(96, 0, 173, 1)",
          color: "transparent",
          letterSpacing: "0.04em",
          position: "relative", // Ensure relative positioning for containing the ball
        }}
      >
        {/* <motion.svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        > */}
        {/* SVG path outlines the stroke of the text */}
        {/* <motion.path
            d="M 10 50 Q 25 20 40 50 Q 55 80 70 50 Q 85 20 90 50"
            fill="none"
            stroke="transparent"
            strokeWidth="1"
            animate={{ pathLength: 1, opacity: [0, 1] }}
            transition={{ duration: 2 }}
          /> */}
        {/* Circle representing the ball */}
        {/* <motion.circle
            ref={ref}
            cx="10"
            cy="50"
            r="2"
            fill="purple"
            animate={controls}
          />
        </motion.svg> */}
        UXBYTE
      </h1>
      <div className="md:absolute ">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <div className="flex flex-col md:flex-row text-3xl md:text-4xl items-center md:mt-1 lg:mt-40 font-semibold ">
            <span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text  text-transparent">
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
          className="md:text-xl  text-1.5xl text-center mx-3 md:mx-0  md:px-72  md:mt-80 my-4  "
          style={{ color: descriptionColor }}
        >
          We bridge the gap between cutting-edge design and powerful
          development. From sleek websites & intuitive apps we empower your
          brand to thrive in the ever-evolving digital landscape.
        </div>
      </div>
      <div className="mt-8  md:mt-16 md:mb-20">
        <button
          className={`${colorsChangeButton} py-3 px-6 flex rounded-lg hover:bg-gray-800 my-4 md:my-0 font-semibold`}
          onClick={handleConnect}
        >
          Let&apos;s Connect
          <span className="mx-2 my-1">
            <BsFillLightningChargeFill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
