"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineSun } from "react-icons/hi2";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    console.log("Navbar open state:", isNavbarOpen);
  }, [isNavbarOpen]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  console.log("state:", isNavbarOpen);

  return (
    <nav className=" dark:border-gray-700  mt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/main-log.png" width={40} height={40} />
          <span className="self-center text-2xl  font-extrabold  whitespace-nowrap dark:text-white">
            UXByte
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 size-20"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen ? "true" : "false"} // Corrected to reflect the current state
          onChange={() => {
            toggleNavbar(); // Correctly calling the toggleNavbar function
            console.log("click");
          }}
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
        <div
          className={`hidden w-full md:block md:w-auto ${
            isNavbarOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-xl ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  "
              >
                Let's Talk
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center ml-4  py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <HiOutlineSun className="size-8" />
              </a>
            </li>

            <li>
              <button
                href="#"
                class="block h-10 w-36 px-6 text-black border  ml-6 bg-white  rounded-lg  hover:text-blue-700 dark:text-white dark:hover:text-blue-500 dark:bg-white dark:hover:bg-gray-800 md:border-0 md:hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent "
              >
                <span style={{ "font-size": "0.9rem" }}>Let's Connect</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
