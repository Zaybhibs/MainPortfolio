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

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center  bg-white">
          <span
            data-aos="zoom-out"
            className="text-4xl font-extrabold text-purple-700 "
          >
            Zainab's Portfolio
          </span>
        </div>
      ) : (
        <div className="flex">
          <Cursorball />
          <div className="fixed top-0 left-0 h-full w-[310px] border-r-2 border-r-slate-200 px-12 pt-10">
            <Aside />
          </div>

          <div className="ml-[255px] flex-1 pt-10">
            <div className="fixed right-7 z-50">
              {" "}
              <Navbar />
            </div>
            <Main />
            <Scroll />
            <Cost />
            <Project id="project" />
            <About />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
