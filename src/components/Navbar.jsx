import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import work from "../assets/Work (5).png";

const Navbar = () => {
  return (
    <div className="relative z-50">
      <div className="flex justify-end mr-10">
        <img src={work} alt="" className="rounded-md z-50 " />
      </div>
    </div>
  );
};

export default Navbar;
