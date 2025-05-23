import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Navbar = ({ togglePopup }) => {
  return (
    <div className="relative z-50">
      <div className="flex justify-end mr-10">
        <button
          onClick={togglePopup}
          className="bg-purple-700 rounded-full text-center w-24 text-white p-2 font-semibold"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
