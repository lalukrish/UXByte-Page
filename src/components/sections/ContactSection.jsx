"use client";

import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
const ContactSection = () => {
  return (
    <div className="grid grid-cols-5 gap-10 mt-40 ml-10">
      {/* Left Grid for Text Content */}
      <div className="col-span-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold ml-20">Let's Create</h2>
          <h2 className="bg-gradient-to-r from-white  via-black-100 to-black-200 text-transparent bg-clip-text text-5xl font-bold ml-20">
            Experiences !
          </h2>
          <br></br>
          <h4 className="text-2xl font-normal ml-20">Let's talk !</h4>
          <div>
            <h5
              className="text-xl font-medium mt-20 ml-20"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              <a href="mailto:info@uxbyte.com" className="flex">
                <IoMdMail style={{ width: "32px", height: "32px" }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@uxbyte.com
              </a>
            </h5>
            <br></br>
            <h5
              className="text-xl font-medium mt-25 ml-20"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              <div className="flex mt-2]">
                <MdLocalPhone style={{ width: "30px", height: "30px" }} />
                &nbsp;&nbsp;&nbsp;&nbsp; +91 88833 67373
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; +91 95392 46945
              </div>
            </h5>
            <br></br>
            <h5
              className="text-xl font-medium mt-30 ml-20"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              <a href="" className="flex">
                <HiLocationMarker style={{ width: "30px", height: "30px" }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kochi, India{" "}
              </a>
            </h5>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div
            className="ml-20 flex-auto"
            style={{ display: "flex", marginRight: "5px" }}
          >
            <a href="">
              <FaFacebookF style={{ width: "30px", height: "30px" }} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">
              <FaInstagram style={{ width: "30px", height: "30px" }} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">
              <FaLinkedinIn style={{ width: "30px", height: "30px" }} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="">
              <LuGithub style={{ width: "30px", height: "30px" }} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {/* Right Grid for Card Block */}
      <div className="col-span-3">
        <div className="max-w-2xl p-16 bg-gray-600   rounded-lg shadow  dark:bg-gray-800 " style={{backgroundColor:"#3f3f3f"}}>
          <div>
            <h2 className="text-white font-normal text-2xl ">
              I'm Interested In
            </h2><br></br><br />
          </div>
          <div className="flex gap-2">
          <button style={{ fontSize: '0.66rem', border: '1px solid white', backgroundColor: "#3f3f3f3f", color: 'white' }} className="hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-gray-600 dark:hover:bg-white dark:focus:ring-white dark:hover:text-black">
            UI UX Design
          </button>
            <button style={{ fontSize: '0.65rem', border: '1px solid white', backgroundColor: "#3f3f3f3f", color: 'white' }} className="hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-gray-600 dark:hover:bg-white dark:focus:ring-white">
              Web Tech
            </button>
            <button style={{ fontSize: '0.65rem', border: '1px solid white', backgroundColor: "#3f3f3f3f", color: 'white' }} className="hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-gray-600 dark:hover:bg-white dark:focus:ring-white">
              Mobile Apps
            </button>
            <button style={{ fontSize: '0.65rem', border: '1px solid white', backgroundColor: "#3f3f3f3f", color: 'white' }} className="hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-gray-600 dark:hover:bg-white dark:focus:ring-white">
              Digital Marketing
            </button>
            <button style={{ fontSize: '0.65rem', border: '1px solid white', backgroundColor: "#3f3f3f3f", color: 'white' }} className="hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-gray-600 dark:hover:bg-white dark:focus:ring-white">
              SEO
            </button>
            <button style={{ fontSize: '0.6rem', border: '1px solid white', backgroundColor: "#3f3f3f3f", color: 'white' }} className="hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 text-center dark:bg-gray-600 dark:hover:bg-white dark:focus:ring-white">
              Other
            </button>
          </div>





          <br />
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* Input fields */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:border-white dark:placeholder-gray-400 dark:text-white " style={{backgroundColor:"#3f3f3f3f"}}
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg   block w-full p-2.5 dark:border-white dark:placeholder-gray-400 dark:text-white " style={{backgroundColor:"#3f3f3f3f"}}
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg   block w-full p-2.5 dark:border-white dark:placeholder-gray-400 dark:text-white " style={{backgroundColor:"#3f3f3f3f"}}
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg   block w-full p-2.5  dark:border-white dark:placeholder-gray-400 dark:text-white " style={{backgroundColor:"#3f3f3f3f"}}
                  placeholder=""
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              {/* <div className="">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Message
                </label>
                <input
                  type="text"
                  id=""
                  className="w-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder=""
                  required
                />
              </div> */}
            <div className="">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   dark:border-white dark:placeholder-gray-400 dark:text-white " style={{backgroundColor:"#3f3f3f3f"}}
                  placeholder=""
                ></textarea>
              </div>

            </div>
            <br></br>
            
            <div className="flex flex-col items-center justify-center">
            <button
                    type="submit"
                    className="flex items-center justify-center text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
                    style={{ fontSize: "20px", fontWeight: "200" }}
                  >
                    <BsFillSendFill className="mr-2" style={{ width: "20px", height: "20px" }} />
                    Send Message
                  </button>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </div>
  );
};

export default ContactSection;
