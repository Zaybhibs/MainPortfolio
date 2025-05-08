import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa6";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaArrowDown } from "react-icons/fa6";
import pexel from "../assets/mybabypic.jpg";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import "../index.css";

const Main = () => {
  const mainRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 3000 });
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

  // Text content
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
  // Fast animation speed (50ms per character)
  const typingSpeed = 50;

  useEffect(() => {
    // Greeting animation
    let greetingTimeout;
    if (greetingText.length < texts.greeting.length) {
      greetingTimeout = setTimeout(() => {
        setGreetingText(texts.greeting.substring(0, greetingText.length + 1));
      }, typingSpeed);
    }

    // Design/Develop animation (starts after greeting completes)
    let designTimeout;
    if (greetingText.length === texts.greeting.length) {
      if (designText.length < texts.design.length) {
        designTimeout = setTimeout(() => {
          setDesignText(texts.design.substring(0, designText.length + 1));
        }, typingSpeed);
      }
    }

    // Websites animation (starts after design completes)
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

    // let thirdtimeout;
    // if (ideathree.length < third.ideasthree.length) {
    //   thirdtimeout = setTimeout(() => {
    //     setIdeathree(third.ideasthree.substring(0, ideathree.length + 1));
    //   }, typingSpeed);
    // }

    // let thirdtwotimeout;
    // if (ideathree.length === third.ideasthree.length) {
    //   if (ideafour.length < third.letsfour.length) {
    //     thirdtwotimeout = setTimeout(() => {
    //       setIdeafour(third.letsfour.substring(0, ideafour.length + 1));
    //     }, typingSpeed);
    //   }
    // }

    return () => {
      clearTimeout(greetingTimeout);
      clearTimeout(designTimeout);
      clearTimeout(websitesTimeout);
      clearTimeout(ideatimeout);
      clearTimeout(ideatwotimeout);
      // clearTimeout(thirdtimeout);
      // clearTimeout(thirdtwotimeout);
    };
  }, [
    greetingText,
    designText,
    websitesText,
    idea,
    ideatwo,
    // ideathree,
    // ideafour,
  ]);

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

  // Calculate positions for styled name
  const nameStart = texts.greeting.indexOf("Zainab");
  const beforeName = greetingText.substring(0, nameStart);
  const showName = greetingText.length > nameStart;
  const nameStarts = text.ideas.indexOf("To begin with, we need an");
  const showNames = idea.length > nameStarts;
  const nameStartss = third.ideasthree.indexOf("Then, an analysis and a");
  const showNamess = ideathree.length > nameStartss;
  return (
    <div ref={mainRef} className="relative top-28">
      {/* Gradient box */}
      <div
        className="absolute top-4 left-60 bg-gradient-to-r from-purple-700 to-emerald-100 w-20 h-20 rounded-md animate-pulse shadow-lg "
        data-aos="fade-right"
      />

      {/* Animated text sections */}
      <div className="absolute top-24 left-72 space-y-5" data-aos="fade-up">
        {/* Line 01 - Greeting */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl text-gray-400">01</h1>
          <h1 className="text-6xl font-normal">
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

        {/* Line 02 - Design/Develop */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl text-gray-500">02</h1>
          <h2 className="text-6xl font-normal">
            <span className="text-gray-500 font-medium">&lt;</span>
            {designText.substring(0, 2)} {/* "I " */}
            {designText.length > 2 && (
              <span className="text-purple-700 font-medium">
                {designText.substring(2, 8)} {/* "design" */}
                {designText.length >= 8 && (
                  <HiMiniPaintBrush className="inline  pt-2 w-6 text-black" />
                )}
              </span>
            )}
            {/* " and " */}
            {designText.length > 8 && designText.substring(8, 13)}
            {/* "develop" */}
            {designText.length > 13 && (
              <span className="text-purple-700 font-medium">
                {designText.substring(13)}
              </span>
            )}
            {/* Laptop icon (after full line is typed) */}
            {designText.length >= texts.design.length && (
              <FaLaptopCode className="inline ml-2 w-6  pt-2" />
            )}
            {/* Cursor blink during typing */}
            {designText.length < texts.design.length && (
              <span className="inline-block w-1 h-12 bg-gray-500 ml-1 animate-blink" />
            )}
          </h2>
        </div>

        {/* Line 03 - Websites */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl text-gray-400">03</h1>
          <h2 className="text-6xl font-normal">
            {websitesText}
            {websitesText.length === texts.websites.length && (
              <span className="text-gray-500 font-medium">&gt;</span>
            )}
            {websitesText.length < texts.websites.length && (
              <span className="inline-block w-1 h-12 bg-gray-500 ml-1 animate-blink" />
            )}
          </h2>
        </div>
        <p className="font-medium text-xl py-5">Let me show You ..</p>
      </div>

      <div className=" absolute top-[27rem] left-14 w-[95%] h-28 bg-gradient-to-tr from-[#7e22ce29] to-white  animate-pulse"></div>
      <div className="absolute top-[26rem] left-[35rem]">
        <div className="flex justify-center mx-auto items-center gap-3 bg-white  py-4 px-8 rounded-md ">
          <h2 className="font-bold">Learn More</h2>
          <div className="bg-purple-700 text-white w-10 rounded-md h-10 text-3xl  animate-bounce">
            <FaArrowDown className=" text-white mx-auto" />
          </div>
        </div>
      </div>
      <div className="absolute top-[35rem]">
        <div
          className="absolute top-4 left-24 bg-gradient-to-r from-purple-700 to-emerald-100 w-16 h-16 rounded-md animate-pulse shadow-lg "
          data-aos="fade-up"
        />
        <div
          data-aos="fade-up"
          className="absolute left-32 top-[3rem] h-20 w-[370px] rounded-full opacity-85 z-10"
        >
          <div className="absolute inset-3 blur-sm rounded-sm bg-gradient-to-br from-white to-white"></div>

          <div className="relative flex flex-col gap-3 px-4 py-2">
            <div className="flex items-center w-[400px] gap-5">
              <h1 className="z-10 text-gray-500 text-2xl">01</h1>
              <h1 className="font-bold text-2xl">
                {showNames && (
                  <>
                    {idea.substring(nameStarts)}
                    {idea.length < text.ideas.length && (
                      <span className="inline-block w-1 h-6 bg-gray-500 ml-1 animate-blink" />
                    )}
                  </>
                )}
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-2xl text-gray-500">02</h1>
              <h2 className="text-2xl text-purple-700 font-bold">{ideatwo}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="200"
        className="absolute top-[48rem] left-28 "
      >
        <div className="flex gap-3 items-center">
          <div className="w-14 h-14 bg-[#6c6685]  text-center rounded-full">
            <h1 className="font-bold text-white pt-2 text-3xl">B</h1>
          </div>
          <div className="bg-[#e9d5ffa3] border-b-purple-700 tracking-normal border-2 py-5  px-8 font-medium text-lg space-y-2 rounded-lg">
            <h3>I need a website for my food blog, Bibi's EpicureanBlog.</h3>
            <h3>
              We specialize in bringing delicious stories to life, one webpage
              at a time.
            </h3>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-[51rem]">
        <div
          className="absolute top-4 left-24 bg-gradient-to-r from-purple-700 to-emerald-100 w-16 h-16 rounded-md animate-pulse shadow-lg"
          data-aos="fade-up"
        />
        <div
          data-aos="fade-up"
          className="absolute left-32 top-[3rem] h-20 w-[370px] rounded-full opacity-85 z-10"
        >
          <div className="absolute inset-3 blur-sm rounded-sm bg-gradient-to-br from-white to-white"></div>

          <div className="relative flex flex-col gap-3 px-4 py-2">
            <div className="flex items-center w-[400px] gap-5">
              <h1 className="z-10 text-gray-500 text-2xl">03</h1>
              <h1 className="font-bold text-2xl">
                {showNamess && (
                  <>
                    {ideathree.substring(nameStartss)}
                    {ideathree.length < third.ideasthree.length && (
                      <span className="inline-block w-1 h-6 bg-gray-500 ml-1 animate-blink" />
                    )}
                  </>
                )}
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-2xl text-gray-500">04</h1>
              <h2 className="text-2xl text-purple-700 font-bold">{ideafour}</h2>
            </div>
          </div>
        </div>
      </div> */}

      <div
        data-aos="fade-left"
        data-aos-duration="200"
        className="absolute top-[57rem] left-[30rem] "
        ref={triggerRef}
      >
        <div className="flex gap-3 items-center">
          <div className="bg-[#e9d5ffa3] border-b-purple-700 tracking-normal border-2 py-5  px-8 font-medium text-lg space-y-2 rounded-lg">
            <h3>Alright, great!</h3>
            <h3>
              I'll handle everything, first the design that I'll share with you.
              Once validated,
            </h3>
            <h3>I'll develop your website and put it online!</h3>
          </div>
          <div className="">
            <img
              src={pexel}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="200"
        className="absolute top-[68rem] left-28 "
      >
        <div className="flex gap-3 items-center">
          <div className="w-14 h-14 bg-[#6c6685]  text-center rounded-full">
            <h1 className="font-bold text-white pt-2 text-3xl">B</h1>
          </div>
          <div className="bg-[#e9d5ffa3] border-b-purple-700 tracking-normal border-2 py-5  px-8 font-medium text-lg space-y-2 rounded-lg">
            <h3>Perfect, when do we start?</h3>
          </div>
        </div>
      </div>
      <div className="absolute top-[75rem] left-[38rem] ">
        <p>Now!</p>
        <div className="bg-purple-700 text-white w-10 rounded-md h-10 text-3xl mt-4  animate-bounce">
          <FaArrowDown className=" text-white mx-auto" />
        </div>
      </div>
      <div
        data-aos="zoom-out-up"
        className="absolute top-[87rem] left-32 scale"
      >
        <div className="flex gap-7 ">
          <div className="w-[50%] font-medium ">
            <div className="flex gap-3 text-xl items-center mb-3">
              <FaRegLightbulb className="text-2xl" />
              <h2>Market Analysis</h2>
            </div>
            <h2 className="text-xl tracking-wider">
              Food blogs are thriving, with a growing demand for new recipes,
              healthy options, and interactive experiences. Audiences seek more
              than just content—they want a platform that offers fresh recipes
              and an engaging, interactive user experience
            </h2>
          </div>
          <div className="font-medium w-[50%] mx-7 ">
            <div className="flex gap-3 items-center mb-3">
              <MdReportProblem className="text-2xl" />
              <h2 className="text-xl">Problem</h2>
            </div>
            <h2 className="text-xl tracking-wider">
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
