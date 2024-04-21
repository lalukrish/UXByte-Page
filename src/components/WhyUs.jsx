import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const fadeInScaleRotate = {
  initial: { opacity: 0, scale: 0.9,  },
  animate: { opacity: 1, scale: 1, rotate: 0 },
};

const WhyUs = ({ theme, toggleTheme }) => {
  const textColor = theme === "light" ? "text-black" : "text-white";
  const textColor2 = theme === "light" ? "text-gray-600" : "text-gray-400";
  const buttonColor = theme === "light" ? "bg-white" : "bg-red-500";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-[#0f0f0f]"; // Adjust background color based on theme
  const imageColor = theme === "light" ? "invert" : "brightness-100";
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <div
      className={` py-12 text-center" id="why_us"  ${textColor} ${backgroundColor}`}
    >
      <div className=" mb-6" ref={ref}>
        
        <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent flex justify-center">
          Why us !
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-12 gap-6 ">

        <motion.div
            
            // className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeIn" }}
            // style={{ marginLeft: "2rem" }}
          >
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/assets/pie-and-charts.svg"
              alt=""
              className={`filter ${imageColor} hover:brightness-75`}
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1
                className="text-2xl font-semibold my-4"
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                Future Proof Execution
              </h1>
              <p
                className={ `mx-20  text-left mr-6 md:ml-12 ${textColor2} `}
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                We build with the latest advancements in mind, ensuring your
                product scales, stays secure, and thrives for years to come.
              </p>
            </div>
          </div></motion.div>

          <motion.div
            ref={ref}
            // className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeIn" }}
            // style={{ marginLeft: "2rem" }}
          >
          <div className="flex flex-col items-center justify-center my-8 md:mt-0">
            <Image
              src="/assets/smart-people.svg"
              alt=""
              className={`filter ${imageColor} hover:brightness-75`}
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1
                className="text-2xl font-semibold my-4"
                style={{ fontSize: 24, fontWeight: 700 }}
              >
              Streamlined  Efficiency
              </h1>
              <p
                className={ `mx-20  text-start mr-6 md:ml-12 ${textColor2} `}
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                Our refined processes guarantee transparency and keep your
                project on track and within budget.{" "}
              </p>
            </div>
          </div></motion.div>

          <motion.div
            ref={ref}
            // className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeIn" }}
            // style={{ marginLeft: "2rem" }}
          >
          <div className="flex flex-col items-center justify-center my-8 md:mt-0">
            <Image
              src="/assets/designer-working.svg"
              alt=""
              className={`filter ${imageColor} hover:brightness-75`}
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1
                className="text-2xl font-semibold my-4"
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                Design that Captivates
              </h1>
              <p
                className={ `mx-20  text-left mr-6 md:ml-12 ${textColor2} `}
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                We create beautiful and user-friendly interfaces that not only
                look amazing but also deliver an intuitive experience.{" "}
              </p>
            </div>
          </div></motion.div>
          <motion.div
            ref={ref}
            // className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeIn" }}
            // style={{ marginLeft: "2rem" }}
          >
          <div className="flex flex-col items-center justify-center my-8 md:mt-0">
            <Image
              src="/assets/business-deal.svg"
              alt=""
              className={`filter ${imageColor} hover:brightness-75`}
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1
                className="text-2xl font-semibold my-4"
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                End-to-End Partnership
              </h1>
              <p
                className={ `mx-20  text-left mr-6 md:ml-11 ${textColor2} `}
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                We &apos;re here for the long haul, supporting you from
                brainstorming to launch and beyond.{" "}
              </p>
            </div>
          </div></motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
