import React from "react";
import pexel from "../assets/mybabypic.jpg";
import { RiHome9Line } from "react-icons/ri";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiEyes } from "react-icons/pi";
import { FaFaceMehBlank } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="fixed">
      <div className="mb-20">
        <img
          src={pexel}
          alt=""
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center gap-5 mb-5">
        <RiHomeOfficeFill className="text-5xl text-purple-700 font-bold" />
        <h2 className="bg-[#dbf1d43d] border-l-2 border-l-purple-700 py-3 px-4 rounded-lg text-purple-700 font-bold text-xl">
          Home
        </h2>
      </div>

      <div className="flex items-center gap-5 ml-1 mb-6">
        <PiEyes className="text-4xl  font-extrabold" />
        <a href="#project" className="font-bold text-[22px]">
          Projects
        </a>
      </div>

      <div className="flex items-center gap-5 ml-1">
        <FaFaceMehBlank className="text-2xl  font-bold" />
        <h2 className="font-bold text-[21px]">About Me</h2>
      </div>

      <div className="mt-16 mb-8 text-center">
        <h1 className="text-purple-700 text-xl font-bold">EN /</h1>
      </div>
      <div className="flex gap-3 mb-3 items-center justify-center">
        <a
          href="https://www.instagram.com/bhibsss?igsh=MW4wNmU1ajVlMXVuYQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <AiFillInstagram className="font-bold text-5xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/zaynab-olusekun-0667bb30b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
        >
          {" "}
          <FaLinkedin className=" text-4xl" />
        </a>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <a
          href="https://www.tiktok.com/@bhibsss?_t=ZM-8vAPuMJYhuR&_r=1"
          target="_blank"
        >
          {" "}
          <FaTiktok className=" text-4xl scale" />
        </a>
        <a href="https://x.com/abake24093392?s=21" target="_blank">
          <FaTwitter className=" text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Aside;
