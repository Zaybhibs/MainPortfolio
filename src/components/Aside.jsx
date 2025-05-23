import React, { useState } from "react";
import pexel from "../assets/Image__2_-removebg-preview.png";
import { RiHome9Line } from "react-icons/ri";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiEyes } from "react-icons/pi";
import { FaFaceMehBlank } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Aside = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, null, " ");
    }
  };

  return (
    <div className="fixed ">
      <div className="mb-20 bg-purple-700 w-48 h-48 rounded-full">
        <img
          src={pexel}
          loading="lazy"
          alt=""
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center gap-5 mb-5">
        <RiHomeOfficeFill className="text-5xl text-purple-700 font-bold" />
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className={`font-bold text-[22px] ${
            activeSection === "home"
              ? "text-purple-700 border-l-purple-700 bg-[#dbf1d43d] border-l-2 py-3 px-4 rounded-lg font-bold text-xl"
              : "text-black bg-none"
          }`}
        >
          Home
        </button>
      </div>

      <div className="flex items-center gap-5 ml-1 mb-6">
        <PiEyes className="text-4xl font-extrabold" />
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("project");
          }}
          className={`font-bold text-[22px] ${
            activeSection === "project"
              ? "text-purple-700 bg-[#dbf1d43d] border-l-2 py-3 px-4 rounded-lg font-bold text-xl  border-l-purple-700"
              : "text-black"
          }`}
        >
          Projects
        </button>
      </div>

      <div className="flex items-center gap-5 ml-1">
        <FaFaceMehBlank className="text-2xl font-bold" />
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className={`font-bold text-[21px] ${
            activeSection === "about"
              ? "text-purple-700 bg-[#dbf1d43d] border-l-2 py-3 px-4 rounded-lg font-bold text-xl  border-l-purple-700"
              : "text-black"
          }`}
        >
          About Me
        </button>
      </div>

      <div className="mt-16 mb-8 text-center">
        <h1 className="text-purple-700 text-xl font-bold">EN /</h1>
      </div>
      <div className="flex gap-3 mb-3 items-center justify-center">
        <a href="https://github.com/Zaybhibs/" target="_blank">
          <FaGithub className="font-bold text-4xl" />
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
          href="https://www.instagram.com/bhibsss?igsh=MW4wNmU1ajVlMXVuYQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <AiFillInstagram className="font-bold text-5xl" />
        </a>
        <a href="https://x.com/abake24093392?s=21" target="_blank">
          <FaTwitter className=" text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Aside;
