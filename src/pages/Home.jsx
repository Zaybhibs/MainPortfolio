import React, { useState, useEffect } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

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
            className="text-4xl font-extrabold text-[#63c344] "
          >
            Zainab's Portfolio
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-span-2 px-12 border-r-2 border-r-slate-200 pt-10 ">
            <Aside className="fixed" />
          </div>
          <div className="col-span-10 pt-10">
            <Navbar className="fixed" />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
