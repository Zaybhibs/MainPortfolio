import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa6";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaArrowDown } from "react-icons/fa6";
import pexel from "../assets/Image__2_-removebg-preview.png";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import "../index.css";
import mypic from "../assets/mybabypic.jpg";
import blog from "../assets/carouselone.png";
import ecommerce from "../assets/frameEcommercepreview.png";
import { motion } from "framer-motion";

const Main = () => {
  const mainRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentImage, setCurrentImage] = useState(0); // 0 for first image, 1 for second

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowIdeas(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  // Animation states
  const [showIdeas, setShowIdeas] = useState(false);
  const [greetingText, setGreetingText] = useState("");
  const [designText, setDesignText] = useState("");
  const [websitesText, setWebsitesText] = useState("");
  const [idea, setIdea] = useState("");
  const [ideatwo, setIdeaTwo] = useState("");
  const [ideathree, setIdeathree] = useState("");
  const [ideafour, setIdeafour] = useState("");

  const texts = {
    greeting: "Hello, I'm Zainab!",
    design: "I design and develop",
    websites: "websites.",
  };

  const text = {
    ideas: "To begin with, we need an",
    lets: "idea ...",
  };

  const third = {
    ideasthree: "Then, an analysis and a",
    letsfour: "direction",
  };
  const typingSpeed = 50;

  useEffect(() => {
    let greetingTimeout;
    if (greetingText.length < texts.greeting.length) {
      greetingTimeout = setTimeout(() => {
        setGreetingText(texts.greeting.substring(0, greetingText.length + 1));
      }, typingSpeed);
    }

    let designTimeout;
    if (greetingText.length === texts.greeting.length) {
      if (designText.length < texts.design.length) {
        designTimeout = setTimeout(() => {
          setDesignText(texts.design.substring(0, designText.length + 1));
        }, typingSpeed);
      }
    }

    let websitesTimeout;
    if (designText.length === texts.design.length) {
      if (websitesText.length < texts.websites.length) {
        websitesTimeout = setTimeout(() => {
          setWebsitesText(texts.websites.substring(0, websitesText.length + 1));
        }, typingSpeed);
      }
    }

    let ideatimeout;
    if (idea.length < text.ideas.length) {
      ideatimeout = setTimeout(() => {
        setIdea(text.ideas.substring(0, idea.length + 1));
      }, typingSpeed);
    }

    let ideatwotimeout;
    if (idea.length === text.ideas.length) {
      if (ideatwo.length < text.lets.length) {
        ideatwotimeout = setTimeout(() => {
          setIdeaTwo(text.lets.substring(0, ideatwo.length + 1));
        }, typingSpeed);
      }
    }

    return () => {
      clearTimeout(greetingTimeout);
      clearTimeout(designTimeout);
      clearTimeout(websitesTimeout);
      clearTimeout(ideatimeout);
      clearTimeout(ideatwotimeout);
    };
  }, [greetingText, designText, websitesText, idea, ideatwo]);

  useEffect(() => {
    let thirdtimeout, thirdtwotimeout;

    const animationsCompleted =
      greetingText === texts.greeting &&
      designText === texts.design &&
      websitesText === texts.websites;

    if (showIdeas && animationsCompleted) {
      if (ideathree.length < third.ideasthree.length) {
        thirdtimeout = setTimeout(() => {
          setIdeathree(third.ideasthree.substring(0, ideathree.length + 1));
        }, typingSpeed);
      } else if (ideafour.length < third.letsfour.length) {
        thirdtwotimeout = setTimeout(() => {
          setIdeafour(third.letsfour.substring(0, ideafour.length + 1));
        }, typingSpeed);
      }
    }

    return () => {
      clearTimeout(thirdtimeout);
      clearTimeout(thirdtwotimeout);
    };
  }, [showIdeas, ideathree, ideafour, greetingText, designText, websitesText]);
  const nameStart = texts.greeting.indexOf("Zainab");
  const beforeName = greetingText.substring(0, nameStart);
  const showName = greetingText.length > nameStart;
  const nameStarts = text.ideas.indexOf("To begin with, we need an");
  const showNames = idea.length > nameStarts;
  const nameStartss = third.ideasthree.indexOf("Then, an analysis and a");
  const showNamess = ideathree.length > nameStartss;
  return (
    <div ref={mainRef} className="relative xl:top-28 top-32">
      <div className=" absolute -top-20 left-36 md:left-72 w-32 h-32 bg-purple-700 rounded-full lg:hidden">
        <img
          src={pexel}
          alt=""
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div
        className="absolute top-16 xl:top-4 md:left-72 lg:left-36  lg:-top-3  xl:left-60 left-5 bg-gradient-to-r from-purple-700 to-emerald-100 w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-md animate-pulse shadow-lg "
        data-aos="fade-right"
      />

      <div
        className="absolute top-24 xl:left-72 lg:top-16 left-16 lg:left-44 md:left-56 space-y-5"
        data-aos="fade-up"
      >
        <div className="flex items-center md:gap-3 gap-1">
          <h1 className=" md:text-2xl  text-gray-400">01</h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-medium md:font-normal">
            <span className="text-gray-500 font-medium">&lt;</span>
            {beforeName}
            {showName && (
              <span className="text-purple-700 font-medium">Zainab</span>
            )}
            {greetingText.substring(nameStart + "Zainab".length)}
            <span className="text-gray-500 font-medium">&gt;</span>
            {greetingText.length < texts.greeting.length && (
              <span className="inline-block w-1 h-12 bg-gray-500 ml-1 animate-blink" />
            )}
          </h1>
        </div>

        <div className="flex items-center md:gap-3 gap-1">
          <h1 className="md:text-2xl text-gray-500">02</h1>
          <h2 className="text-2xl lg:text-4xl md:text-3xl xl:text-6xl font-medium md:font-normal">
            <span className="text-gray-500 font-medium">&lt;</span>
            {designText.substring(0, 2)} {/* "I " */}
            {designText.length > 2 && (
              <span className="text-purple-700 font-medium">
                {designText.substring(2, 8)}
                {designText.length >= 8 && (
                  <HiMiniPaintBrush className="inline w-4 md:pt-2 md:w-6 text-black" />
                )}
              </span>
            )}
            {designText.length > 8 && designText.substring(8, 13)}
            {designText.length > 13 && (
              <span className="text-purple-700 font-medium">
                {designText.substring(13)}
              </span>
            )}
            {designText.length >= texts.design.length && (
              <FaLaptopCode className="inline md:ml-2 w-6  md:pt-2" />
            )}
            {designText.length < texts.design.length && (
              <span className="inline-block w-1 h-12 bg-gray-500 ml-1 animate-blink" />
            )}
          </h2>
        </div>

        <div className="flex items-center md:gap-10 gap-3">
          <h1 className="md:text-2xl text-gray-400">03</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-medium md:font-normal">
            {websitesText}
            {websitesText.length === texts.websites.length && (
              <span className="text-gray-500 font-medium">&gt;</span>
            )}
            {websitesText.length < texts.websites.length && (
              <span
                className="inline-block w-1 h-12 bg-gray-500 ml-1 animate-blink"
                style={{ willChange: "transform, opacity" }}
              />
            )}
          </h2>
        </div>
        <p data-aos="fade-in" className="font-medium md:text-xl md:py-5">
          Let me show You ..
        </p>
      </div>

      <div className=" absolute top-80 md:top-[22rem] left-20 md:left-64 lg:hidden">
        <div className="flex items-center justify-center space-x-4">
          {currentImage === 0 && (
            <motion.img
              src={ecommerce}
              loading="lazy"
              alt="Blog Preview"
              className="rounded-lg w-64 h-40"
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          )}

          {currentImage === 1 && (
            <motion.img
              src={blog}
              loading="lazy"
              alt="Ecommerce Preview"
              className="rounded-lg w-64 h-40"
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          )}
        </div>
      </div>

      <div
        className=" absolute md:top-[27rem] top-[32rem] xl:left-14  lg:top-[24rem] xl:top-[27rem]  w-[100%] h-28 bg-gradient-to-t from-[#7e22ce29] to-white  md:bg-gradient-to-t md:from-[#7e22ce29] md:to-white  animate-pulse"
        style={{ willChange: "transform, opacity" }}
      ></div>
      <div className=" md:hidden absolute top-[35rem] left-[2rem]">
        <div className="flex justify-center mx-auto items-center ">
          <div className="bg-purple-700 text-white w-10 rounded-md h-10 text-3xl  animate-bounce">
            <FaArrowDown className=" text-white mx-auto" />
          </div>
        </div>
      </div>

      <div className=" hidden md:block absolute xl:top-[26rem] left-[2rem] lg:left-[18rem] lg:top-[23rem] xl:left-[35rem]">
        <div className="flex justify-center mx-auto items-center gap-3 bg-white  py-4 px-8 rounded-md ">
          <h2 className="font-bold">Learn More</h2>
          <div className="bg-purple-700 text-white xl:w-10 lg:w-8 h-8 rounded-md xl:h-10 xl:text-3xl lg:text-2xl  animate-bounce">
            <FaArrowDown className=" text-white mx-auto" />
          </div>
        </div>
      </div>
      <div className="absolute top-[35rem] lg:top-[32rem] xl:top-[35rem]">
        <div
          className="absolute top-24 md:top-4 left-4 md:left-24  lg:left-10 xl:left-24  bg-gradient-to-r from-purple-700 to-emerald-100  w-12 h-12 md:w-16 md:h-16 rounded-md animate-pulse shadow-lg "
          data-aos="fade-up"
        />
        <div
          data-aos="fade-up"
          className="absolute md:left-32 top-[7rem] left-7 md:top-[48px] xl:left-32 xl:top-[3rem] lg:left-20   h-20 w-[270px] rounded-full opacity-85 z-10"
        >
          <div className="absolute inset-3 blur-sm rounded-sm bg-gradient-to-br from-white to-white"></div>

          <div className="relative flex flex-col gap-3 px-4 py-2">
            <div className="flex items-center w-[400px] gap-2 md:gap-5">
              <h1 className="z-10 text-gray-500 md:text-2xl">01</h1>
              <h1 className="font-bold md:text-2xl xl:text-2xl lg:text-xl">
                {showNames && (
                  <>
                    {idea.substring(nameStarts)}
                    {idea.length < text.ideas.length && (
                      <span
                        className="inline-block w-1 h-6 bg-gray-500 ml-1 animate-blink"
                        // style={{ willChange: "transform, opacity" }}
                      />
                    )}
                  </>
                )}
              </h1>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <h1 className="md:text-2xl text-gray-500">02</h1>
              <h2 className="md:text-2xl text-purple-700 font-bold">
                {ideatwo}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="200"
        className="absolute top-[51rem] md:top-[48rem] md:left-28 xl:top-[48rem] xl:left-28 lg:top-[45rem] lg:left-12 left-5 "
      >
        <div className="flex gap-3 items-center">
          <div className="md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14  w-10 h-10 bg-[#6c6685]  text-center rounded-full">
            <h1 className="font-bold text-white pt-2 md:text-3xl lg:text-2xl xl:text-3xl">
              B
            </h1>
          </div>
          <div className="bg-[#e9d5ffa3] border-b-purple-700 tracking-normal border-2 md:py-5 w-[300px] py-2 px-3 md:w-[700px] xl:w-[700px] lg:w-[600px] md:px-8 font-medium md:text-lg lg:text-base xl:text-lg space-y-2 rounded-lg">
            <h3>I need a website for my food blog, Bibi's EpicureanBlog.</h3>
            <h3>
              We specialize in bringing delicious stories to life, one webpage
              at a time.
            </h3>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="200"
        className="absolute top-[61rem] md:top-[57rem] lg:top-[54rem] xl:top-[57rem] left-6 md:left-[30rem] xl:left-[30rem]  lg:left-[5rem] "
        ref={triggerRef}
      >
        <div className="flex gap-3 items-center">
          <div className="bg-[#e9d5ffa3] border-b-purple-700 tracking-normal border-2 py-2 px-3 lg:text-base xl:text-lg  md:py-5 w-[300px] md:w-[700px]  xl:w-[700px]  lg:w-[600px] md:px-8 font-medium md:text-lg space-y-2 rounded-lg">
            <h3>Alright, great!</h3>
            <h3>
              I'll handle everything, first the design that I'll share with you.
              Once validated,
            </h3>
            <h3>I'll develop your website and put it online!</h3>
          </div>
          <div className="bg-purple-700 rounded-full">
            <img
              src={pexel}
              loading="lazy"
              alt=""
              className="md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14  w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="200"
        className="absolute top-[74rem] md:top-[68rem] md:left-28 lg:top-[67rem] lg:left-12  xl:top-[68rem] xl:left-28  left-5 "
      >
        <div className="flex gap-3 items-center">
          <div className="md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14  w-10 h-10 bg-[#6c6685]  text-center rounded-full">
            <h1 className="font-bold text-white pt-2 md:text-3xl xl:text-3xl lg:text-2xl">
              B
            </h1>
          </div>
          <div className="bg-[#e9d5ffa3] border-b-purple-700 tracking-normal border-2 md:py-5 lg:text-base xl:text-lg  py-2 px-3 md:px-8 font-medium md:text-lg space-y-2 rounded-lg">
            <h3>Perfect, when do we start?</h3>
          </div>
        </div>
      </div>
      <div className="absolute md:top-[75rem]  top-[80rem] left-48 md:left-[38rem] lg:left-[24rem] xl:left-[38rem]">
        <p>Now!</p>
        <div
          className="bg-purple-700 text-white w-10 rounded-md h-10 text-3xl mt-4  animate-bounce"
          style={{ willChange: "transform, opacity" }}
        >
          <FaArrowDown className=" text-white mx-auto" />
        </div>
      </div>
      <div
        data-aos="fade-in"
        className="absolute md:top-[87rem] top-[87rem] md:left-32 lg:left-14 xl:left-32 left-5 "
      >
        <div className="md:flex gap-7 space-y-4">
          <div className="md:w-[50%] w-[400px] xl:w-[500px] lg:w-[340px] md:font-medium ">
            <div className="flex gap-3 md:text-xl items-center mb-3">
              <FaRegLightbulb className="md:text-2xl" />
              <h2 className="md:text-xl lg:text-base xl:text-xl">
                Market Analysis
              </h2>
            </div>
            <h2 className="md:text-xl lg:text-base xl:text-xl tracking-wider">
              Food blogs are thriving, with a growing demand for new recipes,
              healthy options, and interactive experiences. Audiences seek more
              than just content—they want a platform that offers fresh recipes
              and an engaging, interactive user experience
            </h2>
          </div>
          <div className="md:font-medium md:w-[50%] w-[380px] xl:w-[500px] lg:w-[300px] md:mx-7 ">
            <div className="flex gap-3 items-center mb-3">
              <MdReportProblem className="md:text-2xl" />
              <h2 className="md:text-xl lg:text-base xl:text-xl">Problem</h2>
            </div>
            <h2 className="md:text-xl lg:text-base xl:text-xl tracking-wider">
              Many food blogs lack interactivity and fresh content. The
              challenge is creating a platform with new recipes and engaging
              user experiences.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
