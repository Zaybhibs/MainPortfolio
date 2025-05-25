import React, { useState, useEffect } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "../components/Main";
import Scroll from "../components/Scroll";
import Cursorball from "../components/Cursorball";
import Cost from "../components/Cost";
import Project from "../components/Project";
import About from "../components/About";
import logo from "../assets/logo1.png";
import SmallSideBar from "../components/SmallSideBar";
import Popup from "../components/Popup";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  const onClose = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const homeSection = document.getElementById("home");
      const projectSection = document.getElementById("project");
      const aboutSection = document.getElementById("about");

      if (scrollPosition < projectSection.offsetTop) {
        setActiveSection("home");
      } else if (scrollPosition < aboutSection.offsetTop) {
        setActiveSection("project");
      } else {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <div className="md:fixed inset-0 flex items-center pt-80 md:pt-0 justify-center bg-white ">
          <div className="flex animate-zoom-in-out ">
            <img src={logo} alt="logo" className=" w-8 h-8" />
            <h2 className="font-bold text-4xl pt-2 text-purple-700">
              BibiCodes
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex">
          <Cursorball />
          <div className="hidden lg:fixed lg:flex top-0 left-0 h-full lg:w-[253px] xl:w-[310px] border-r-2 border-r-slate-200 px-12 pt-10">
            <Aside activeSection={activeSection} />
          </div>
          <div className="fixed z-50 lg:hidden">
            <SmallSideBar
              activeSection={activeSection}
              togglePopup={togglePopup}
            />
          </div>

          <div
            className={` lg:ml-[250px] xl:ml-[255px] md:flex-1 pt-10  transition-filter duration-300 ${
              popupVisible ? "blur-sm pointer-events-none select-none" : ""
            }`}
          >
            <div className="hidden xl:flex  lg:fixed right-7 z-50  ">
              <Navbar togglePopup={togglePopup} />
            </div>

            <section id="home">
              <Main />
            </section>
            <Scroll className=" will-change-transform" />
            <Cost />
            <section id="project">
              <Project />
            </section>
            <section id="about">
              <About />
            </section>
          </div>
          {popupVisible && <Popup onClose={onClose} />}
        </div>
      )}
    </>
  );
};

export default Home;
