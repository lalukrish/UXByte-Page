"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineSun } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(true);
  };

  return (
    <div>
      <nav
        className=" fixed w-full z-20 top-0 start-0 "
        style={{ backgroundColor: "#0f0f0f" }}
      >
        <div className="custom_max_width flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://drive.google.com/file/d/1AQveEhzX-VdG_6zwiYh5kQX3SO3lzETD/view?usp=drive_link"
              className="h-10"
              alt=" Logo"
              width={40}
              height={40}
            />
          </a>
          <div className="flex gap-5 md:order-2 space-x-3 md:space-x-0  items-center rtl:space-x-reverse">
            <HiOutlineSun size={"24px"} />
            <button type="button" className="primary_button">
              Let's Connect
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-regular border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a
                  href="#"
                  className=" link-marker block py-2 px-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" link-marker block py-2 px-3 text-white   rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" link-marker block py-2 px-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" link-marker block py-2 px-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" link-marker block py-2 px-3 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
