"use client";

import React, { useState } from "react";
import Navbar from "./navbar";

const Navbarpage = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  console.log("tog", toggle, open);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Navbarpage;
