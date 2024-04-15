import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = (
  {
    whyusLocation,
    servicesLocation,
    aboutUsLocation,
    workLocation,
    workLetstalk,
  }
) => {
  return (
    <>
      <div className="mt-28">
        {" "}
        <hr className="border-t border-white " />
      </div>
      <footer className=" dark:bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src="/assets/white.svg"
                  alt=" Logo"
                  width={140}
                  height={40}
                />
                {/* <span className="self-center text-2xl  font-extrabold  whitespace-nowrap dark:text-white">
                UXByte
              </span> */}
              </a>
              <div className="flex mt-8 sm:justify-center">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaFacebookF />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://www.instagram.com/uxbyte/" target="blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <FaInstagram />
                  <span className="sr-only">Instagram community</span>
                </a>
                <a
                  href="https://twitter.com/uxbytestudio" target="blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <FaXTwitter />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/uxbyte-studio/about/" target="blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
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
                  <li className="mb-4 cursor-pointer hover:underline"  onClick={ aboutUsLocation}>
                    
                      About
                    
                  </li>
                  <li className="mb-4 cursor-pointer hover:underline"  onClick={ whyusLocation}>
                    
                      Why us
                    
                  </li>
                  <li className="mb-4 cursor-pointer hover:underline"  onClick={ workLocation}>
                    
                      Works
                    
                  </li>
                  <li className="mb-4 cursor-pointer hover:underline"  onClick={ servicesLocation}>
                    
                      Services
                    
                  </li>
                  <li className="mb-4 cursor-pointer hover:underline"  onClick={ workLetstalk}>
                    
                      Let&apos;s Talk
                    
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
                      Email: info@uxbyte.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
