import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="md:mx-20 mx-4" id="aboutUs_id">
      <div className="text-5xl font-extrabold mb-8 flex items-center">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          About
        </span>
        <div className="md:block ml-4 gap-2">
          <Image
            src="https://res.cloudinary.com/dvjjzsilz/image/upload/v1711784029/atwww59mdcbnvxvpxmei.png"
            className="h-38 w-36 md:w-48 md:hidden"
            alt=""
            width={32}
            height={20}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:justify-center md:items-center">
        <div className="col-span-1 md:col-span-2 mb-20">
          <ul className="list-disc ml-8 text-xl">
            <li className="mb-4 font-light">
              <span className="text-purple-300 font-bold">
                Passionate Technologists:
              </span>{" "}
              We&apos;re a team that gets fired up about innovation and creating
              awesome tech.
            </li>
            <li className="mb-4 font-light">
              <span className="text-purple-300 font-bold">
                End-to-End Expertise:
              </span>{" "}
              We handle everything from design and development to launch,
              ensuring a seamless product journey.
            </li>
            <li className="mb-4 font-light">
              <span className="text-purple-300 font-bold">
                Affordable Solutions:
              </span>{" "}
              Our flat monthly subscription makes cutting-edge product creation
              accessible to businesses of all sizes.
            </li>
            <li className="mb-4 font-light">
              <span className="text-purple-300 font-bold">Growth Focused:</span>{" "}
              We believe in the power of technology to drive success and are
              dedicated to helping businesses achieve their goals.
            </li>
            <li className="font-light">
              <span className="text-purple-300 font-bold">
                Agile & Collaborative:
              </span>{" "}
              We use agile development methodologies to ensure clear
              communication and a product tailored to your specific needs.
            </li>
          </ul>
        </div>
        {/* Adjusted for medium screens */}
        <div className="hidden sm:block">
          <div className="flex justify-center md:col-span-1 md:mb-20">
            <Image
              src="https://res.cloudinary.com/dvjjzsilz/image/upload/v1711784029/atwww59mdcbnvxvpxmei.png"
              className="h-80 w-80 md:w-80"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;
