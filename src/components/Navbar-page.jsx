"use client";

import React, { useState } from "react";
import Navbar from "./navbar";

const Navbarpage = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar toggle={toggle} open={open} />
    </>
  );
};

export default Navbarpage;
