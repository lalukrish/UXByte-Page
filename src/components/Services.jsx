import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInScaleRotate = {
  initial: { opacity: 0, scale: 0.9, rotate: -5 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <div className="mt-20 text-center" id="services_id">
      <div className="text-6xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Services
        </span>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          <motion.div
            ref={ref}
            className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            style={{ marginLeft: "2rem" }}
          >
            <div className="text-start">
              <span className="text-blue-500 ">Design</span>
            </div>
            <ul className="my-6 text-3xl font-medium text-start">
              <li className="my-4">Brand Identity</li>
              <li className="my-4">UI Design</li>
              <li className="my-4">UX Design</li>
              <li className="my-4">UX Consultancy</li>
              <li className="my-4">Design System</li>
            </ul>
          </motion.div>

          <motion.div
            className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            style={{ marginLeft: "4rem" }}
          >
            <div className="text-start">
              {" "}
              <span className="text-purple-500">Development</span>
            </div>
            <ul className="my-6 text-3xl font-medium text-start">
              <li className="my-4">Web Development</li>
              <li className="my-4">Saas Development</li>
              <li className="my-4">Mobile Apps</li>
              <li className="my-4">Front-End</li>
              <li className="my-4">Back-End</li>
            </ul>
          </motion.div>

          <motion.div
            className="text-4xl font-semibold service-item text-center"
            variants={fadeInScaleRotate}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            style={{ marginLeft: "4rem" }}
          >
            <div className="text-start">
              <span className="text-fuchsia-500">Marketing</span>
            </div>
            <ul className="my-6 text-3xl font-medium text-start">
              <li className="my-4">Branding</li>
              <li className="my-4">Strategy</li>
              <li className="my-4">SEO</li>
              <li className="my-4">Digital Marketing</li>
              <li className="my-4">Content Writing</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
