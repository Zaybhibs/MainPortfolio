import React from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiEyes } from "react-icons/pi";
import { FaFaceMehBlank } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const SmallSideBar = ({ activeSection, togglePopup }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, null, " ");
    }
  };

  return (
    <div>
      <div className="absolute z-50 top-[23rem] bg-white shadow-purple-400 shadow-2xl rounded-md left-[350px] md:left-[700px] px-1">
        <div className=" items-center mt-4  mb-4 ">
          <RiHomeOfficeFill
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className={`font-bold text-[43px] ${
              activeSection === "home"
                ? "text-purple-700 "
                : "text-black bg-none"
            }`}
          />
        </div>
        <div className=" items-center text-4xl  ml-1 mb-4">
          <IoMdContact onClick={togglePopup} />
        </div>

        <div className=" items-center  ml-1 mb-4">
          <PiEyes
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("project");
            }}
            className={`font-bold text-[32px] ${
              activeSection === "project" ? "text-purple-700   " : "text-black"
            }`}
          />
        </div>

        <div className="   pl-2 mb-4">
          <FaFaceMehBlank
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className={`font-bold text-[25px] text-center ${
              activeSection === "about" ? "text-purple-700   " : "text-black"
            }`}
          />
        </div>
        <div>
          <a href="https://github.com/Zaybhibs/" target="_blank">
            <FaGithub className="font-bold text-2xl mb-4 ml-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/zaynab-olusekun-0667bb30b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            {" "}
            <FaLinkedin className=" text-2xl mb-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallSideBar;
