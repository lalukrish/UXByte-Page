import React from "react";

const LetsTalk = () => {
  return (
    <div className="mt-20 text-center" id="lets_talk">
      <div className="text-5xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Let&apos;s talk!
        </span>
      </div>
      <div className="mx-auto max-w-lg">
        <p className="text-2xl font-medium mb-8">
          Get a personalized plan. Schedule a free consultation to discuss your
          specific needs.
        </p>
        <button
          type="button"
          className="text-black bg-white hover:bg-gray-200 font-medium rounded-lg text-2xl px-5 py-2.5"
        >
          Design a Quote
        </button>
      </div>
    </div>
  );
};

export default LetsTalk;
