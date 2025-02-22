import { BsFillLightningChargeFill } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
const images = [
  {
    src: "https://play-lh.googleusercontent.com/tgzX1yGEAlMjXyW8cJoUsJrRqVmv-lXx6nV6ymaW3rqjLJXBYPjvTBLgoUdOnFEZMLM=w240-h480-rw",
    name: "University 1",
  },
  {
    src: "data:image/jpeg;base64,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",
    name: "University 2",
  },
  {
    src: "https://play-lh.googleusercontent.com/tgzX1yGEAlMjXyW8cJoUsJrRqVmv-lXx6nV6ymaW3rqjLJXBYPjvTBLgoUdOnFEZMLM=w240-h480-rw",
    name: "University 1",
  },
  {
    src: "data:image/jpeg;base64,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",
    name: "University 2",
  },
  {
    src: "https://play-lh.googleusercontent.com/tgzX1yGEAlMjXyW8cJoUsJrRqVmv-lXx6nV6ymaW3rqjLJXBYPjvTBLgoUdOnFEZMLM=w240-h480-rw",
    name: "University 1",
  },
  {
    src: "data:image/jpeg;base64,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",
    name: "University 2",
  },
  // { src: "/assets/university_3.png", name: "University 3" },
  // { src: "/assets/university_4.png", name: "University 4" },
  // { src: "/assets/university_2.png", name: "University 5" },
];

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
        <p className="  text-center text-lg md:text-2xl -mt-3">
          Welcome to UXByte
        </p>
      </div>
      <span className="md:mb-60 xs:mb-90">
        <h1
          className="text-7xl md:text-9xl font-bold text-transparent whitespace-nowrap "
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
      </span>
      {/* <div className="md:absolute ">
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
      </div> */}
      <Grid container spacing={1} sx={{ mt: { md: -20 } }}>
        {/* Left Section */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: { xs: "center", md: "start" }, // Ensures text is centered
          }}
        >
          <Box sx={{ mx: { md: 8, xs: 4 }, mt: { md: -19 } }}>
            <Typography component="div" sx={{ fontSize: { md: 32, xs: 20 } }}>
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
                Code{" "}
              </span>
              the Future.{" "}
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
                Craft
              </span>{" "}
              the Experience.
            </Typography>
            <Box sx={{ width: { md: 480 } }}>
              <Typography mt={2} sx={{ fontSize: { md: 18, xs: 16 } }}>
                We bridge the gap between cutting-edge design and powerful
                development. From sleek websites & intuitive apps, we empower
                your brand to thrive in the ever-evolving digital landscape.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ color: "black", backgroundColor: "white" }}
                >
                  Let&apos;s Connect
                  <BsFillLightningChargeFill />
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mt: { md: -40 },
            // mx: "auto",
            width: "100%",
            // height: 250,
          }}
        >
          <Typography
            sx={{
              fontSize: { md: 32, xs: 18, fontStyle: "italic" },
              fontWeight: 600,
              color: "white",
              mt: { xs: 17 },
            }}
          >
            Happy Clients
          </Typography>

          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              //   mt: 2,
            }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView="auto"
              loop={true} // Enables infinite loop
              loopAdditionalSlides={1} // Ensures smooth looping
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              speed={8000}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {images.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "120px", // Reduces width to minimize gaps
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.name}
                    sx={{
                      mt: 2,
                      width: 100, // Reducing image size
                      height: 100,
                      objectFit: "contain", // Ensures full image is visible without cropping
                      display: "block",
                      filter: "grayscale(100%)", // Black & white effect
                      opacity: 0.7, // Reduced opacity
                      transition: "opacity 0.3s ease", // Smooth hover effect
                      "&:hover": {
                        opacity: 0.9, // Slightly increase opacity on hover
                      },
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <Swiper
              spaceBetween={1}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              style={{ width: "100%", height: "100%" }}
            >
              {images.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.name}
                    sx={{
                      maxWidth: 120, // Smaller but maintains aspect ratio
                      maxHeight: 120, // Smaller but prevents cropping
                      objectFit: "contain", // Ensures full image is visible
                      display: "block",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}
          </Box>
        </Grid>
      </Grid>

      {/* <div className="mt-8  md:mt-16 md:mb-20">
        <button
          className={`${colorsChangeButton} py-3 px-6 flex rounded-lg hover:bg-gray-800 my-4 md:my-0 font-semibold`}
          onClick={handleConnect}
        >
          <span className="mx-2 my-1"></span>
        </button>
      </div> */}
    </div>
  );
};

export default Hero;
