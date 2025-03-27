import React from "react";
import pexel from "../assets/mybabypic.jpg";
import { RiHome9Line } from "react-icons/ri";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiEyes } from "react-icons/pi";
import { FaFaceMehBlank } from "react-icons/fa6";

const Aside = () => {
  return (
    <div className="">
      <div className="mb-20">
        <img
          src={pexel}
          alt=""
          className="w-44 h-44 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center gap-5 mb-5">
        <RiHomeOfficeFill className="text-5xl text-[#63c344] font-bold" />
        <h2 className="bg-[#dbf1d43d] border-l-2 border-l-[#63c344] py-3 px-4 rounded-lg text-[#63c344] font-bold text-xl">
          Home
        </h2>
      </div>

      <div className="flex items-center gap-5 ml-1 mb-6">
        <PiEyes className="text-4xl  font-bold" />
        <h2 className="font-bold text-xl">Project</h2>
      </div>

      <div className="flex items-center gap-5 ml-1">
        <FaFaceMehBlank className="text-2xl  font-bold" />
        <h2 className="font-bold text-xl">About me..m</h2>
      </div>
    </div>
  );
};

export default Aside;
