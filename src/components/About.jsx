import React from "react";

const About = ({ theme, toggleTheme }) => {
  const textColor = theme === "light" ? "text-black" : "text-white";
  const headColor = theme === "light" ? "text-purple-800" : "text-purple-300";
  const buttonColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const backgroundColor = theme === "light" ? "bg-[#ffffff]" : "bg-[#0f0f0f]"; // Adjust background color based on theme

  return (
    <div className={`p-20 ${backgroundColor}`}>
      <h2 className={`font-bold text-4xl ${textColor}`}>
        We are an international creative agency merging design proficiency with advanced technology and strategic insight.
      </h2>
    </div>
  );
};

export default About;
