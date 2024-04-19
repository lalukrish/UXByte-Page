import React from "react";

const LetsTalk = ({ theme, toggleTheme }) => {
  // Use the theme prop to conditionally apply styles
  const textColor = theme === "light" ? "text-black" : "text-white";
  const buttonColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-[#0f0f0f]"; // Adjust background color based on theme

  return (
    <div
      className={`py-20 text-center ${textColor} ${backgroundColor}`}
      id="lets_talk"
    >
      <div className="text-6xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Let's talk!
        </span>
      </div>
      <div className="mx-auto max-w-lg">
        <p className="text-2xl font-medium mb-8">
          Get a personalized plan. Schedule a free consultation to discuss your
          specific needs.
        </p>
        <button
          type="button"
          className={`${buttonColor} hover:bg-gray-200 font-medium rounded-lg text-2xl px-5 py-2.5`}
          onClick={toggleTheme}
        >
          Design a Quote
        </button>
      </div>
    </div>
  );
};

export default LetsTalk;
