import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


const Footer = ({ theme, toggleTheme }) => {
  const textColor = theme === "light" ? "text-black" : "text-white";
  const buttonColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-[#0f0f0f]"; // Adjust background color based on theme
  const LogoChange =
    theme === "light" ? "/assets/black.svg" : "/assets/white.svg";
  const borderColor = theme === "light" ? "border-black" : "border-white";
  const hoverColor = theme === "light" ? "hover:text-black" : "hover:text-white";

  console.log("text", textColor, backgroundColor);

  return (
    <>
      <div className={`py-28 ${textColor} ${backgroundColor}`}>
        {" "}
        <footer className={` dark:bg-black ${textColor} ${backgroundColor}`}>
          <hr className={`border-t ${borderColor}`   } />

          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a
                  href="#"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <Image
                  src={LogoChange}
                    alt=" Logo"
                    width={140}
                    height={40}
                  />
                  {/* <span className="self-center text-2xl  font-extrabold  whitespace-nowrap dark:text-white">
                UXByte
              </span> */}
                </a>
                <div className="flex mt-8 sm:justify-center gap-5  ">
                  <a
                    href="https://dribbble.com/UXByte_Studio" target="blank"
                  className={`text-gray-500 ${hoverColor} text-2xl`}
                  >
                    <FaDribbble />
                    <span className="sr-only">Dribble</span>
                  </a>
                  <a
                    href="https://www.instagram.com/uxbyte?igsh=MWRiMjZ5ZWJobjdxYw==" target="blank"
                    className={`text-gray-500 ${hoverColor} text-2xl`}
                  >
                    <FaInstagram />
                    <span className="sr-only">Instagram community</span>
                  </a>
                  <a
                    href="https://twitter.com/uxbytestudio" target="blank"
                    className={`text-gray-500 ${hoverColor} text-2xl`}
                  >
                    <FaXTwitter />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/uxbyte-studio/" target="blank"
                    className={`text-gray-500 ${hoverColor} text-2xl`}
                  >
                    <FaLinkedinIn />
                    <span className="sr-only">LinkedIn account</span>
                  </a>
                  {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <FaDribbble/>
                  <span className="sr-only">Dribbble account</span>
              </a> */}
                </div>

                <div className="mt-6  ">
                  <span className="text-sm  sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="/" className="hover:underline">
                      UXByte™
                    </a>
                  </span>
                  <div className="mt-2">
                    <span>All Rights Reserved.</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-xl font-light	  text-gray-400 ">
                    Menu
                  </h2>
                  <ul className=" dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="" className="hover:underline">
                        Home
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="" className="hover:underline">
                        About
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="" className="hover:underline">
                        Why us
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="" className="hover:underline">
                        Works
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="" className="hover:underline">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="hover:underline">
                        Let's Talk
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-xl font-light text-gray-400">
                    Our Services
                  </h2>
                  <ul className=" dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <p> UI UX Designs</p>
                    </li>
                    <li className="mb-4">
                      <p> Web Applications</p>
                    </li>
                    <li className="mb-4">
                      <p> Mobile Apps</p>
                    </li>
                    <li className="mb-4">
                      <p> Saas Product</p>
                    </li>
                    <li className="mb-4">
                      <p> Digital Marketing</p>
                    </li>
                    <li className="mb-4">
                      <p> Content Writing</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-xl font-light text-gray-400">
                    Contact Us
                  </h2>
                  <ul className=" dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="tel:+918883367373" className="hover:underline 	">
                        Phone: +91 88833 67373
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@uxbyte.com"
                        className="hover:underline"
                      >
                        Email: info@uxbyte.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>{" "}
      </div>
    </>
  );
};

export default Footer;
