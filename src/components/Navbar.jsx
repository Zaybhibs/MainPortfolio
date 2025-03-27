import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import work from "../assets/newwork.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-end mr-24">
        <img src={work} alt="" className="rounded-lg " />
      </div>
    </div>
  );
};

export default Navbar;
