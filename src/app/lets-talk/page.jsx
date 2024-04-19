"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

const CalendyMeet = () => {
  return (
    <div className=" h-screen overflow-hidden bg-[#0f0f0f]">
      <div></div>
      <InlineWidget
        url="https://calendly.com/uxbytestudio/let-s-chat"
        pageSettings={{
          backgroundColor: "#222222",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "#B979ED",
          textColor: "#FFFFFF",
        }}
      />
    </div>
  );
};

export default CalendyMeet;
