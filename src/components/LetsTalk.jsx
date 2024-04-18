import React from "react";

const LetsTalk = () => {
  return (
    <div className="mt-20 text-center" id="lets_talk">
      <div className="text-5xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Let&apos;s talk!
        </span>
      </div>
      <div className="mx-auto max-w-xl ">
        <p className=" text-2xl font-light mb-8 " style={{fontSize:28}}>
          Get a personalized plan. Schedule a free consultation to discuss your
          specific needs.
        </p>
        <div className="flex items-center justify-center">
        <button
          type="button"
          className="bg-white text-black py-3.5 px-6 flex rounded-lg hover:bg-gray-200 my-4 md:my-0 font-medium items-center  "
        >
          Design a Quote
        </button>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
