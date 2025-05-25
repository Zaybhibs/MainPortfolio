import React, { useEffect, useState, useRef } from "react";
import screenshot from "../assets/desktopblog.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import frame from "../assets/laptopframe-removebg-preview.png";
import mobilescreenshot from "../assets/mobileBlog.jpeg";
import mobileframe from "../assets/mobileframe-removebg-preview.png";
import { RiPriceTag2Fill } from "react-icons/ri";

const Scroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInFrame, setIsInFrame] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef(null);
  const frameContentRef = useRef(null);
  const frameContentRefs = useRef(null);

  // frame image scrolling
  useEffect(() => {
    const syncScroll = (source, target) => {
      if (!source || !target) return;

      const ratio =
        source.scrollTop / (source.scrollHeight - source.clientHeight);
      target.scrollTop = ratio * (target.scrollHeight - target.clientHeight);
    };

    const desktopNode = frameContentRef.current;
    const mobileNode = frameContentRefs.current;

    const handleScroll = (e) => {
      window.requestAnimationFrame(() => {
        e.target === desktopNode
          ? syncScroll(desktopNode, mobileNode)
          : syncScroll(mobileNode, desktopNode);
      });
    };

    desktopNode?.addEventListener("scroll", handleScroll);
    mobileNode?.addEventListener("scroll", handleScroll);

    return () => {
      desktopNode?.removeEventListener("scroll", handleScroll);
      mobileNode?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (sectionRef.current) {
        const currentScrollY = window.scrollY;
        setIsScrollingUp(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);

        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
        const progress = 1 - rect.bottom / (viewportHeight * 3);
        const clampedProgress = Math.min(1, Math.max(0, progress));
        setScrollProgress(clampedProgress);

        // Check if we're at the very top of the frame content
        const atTopOfFrame = frameContentRef.current?.scrollTop === 0;

        // Enter frame mode when scrolling down past 10% progress
        // Inside your handleScroll function, replace the conditions with:
        const thresholdEnter = window.innerWidth >= 1280 ? 0.1 : 0.55; // XL screens use 0.1, others use 0.05
        const thresholdExit = window.innerWidth >= 1280 ? 0.95 : 0.85; // XL screens use 0.95, others use 0.9

        if (clampedProgress > thresholdEnter && !isInFrame && !isScrollingUp) {
          setIsInFrame(true);
        } else if (
          (clampedProgress <= thresholdExit && isInFrame && isScrollingUp) ||
          (atTopOfFrame && isScrollingUp && isInFrame)
        ) {
          setIsInFrame(false);
        }

        // If we're in frame mode, control the scroll position of the content
        if (isInFrame && frameContentRef.current && frameContentRefs.current) {
          const scrollableHeight =
            frameContentRef.current.scrollHeight -
            frameContentRef.current.clientHeight;
          const scrollPosition = (clampedProgress * scrollableHeight) / 0.2;
          frameContentRef.current.scrollTop = scrollPosition;
          frameContentRefs.current.scrollTop = scrollPosition;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInFrame, lastScrollY, isScrollingUp]);

  // Animation values
  const screenshotTranslateY = -scrollProgress * 2;
  const frameOpacity = Math.min(1, scrollProgress * 3);

  // When in frame mode, we want the screenshot to be fully visible inside the frame
  const framedScreenshotOpacity = isInFrame
    ? 1
    : Math.min(1, (scrollProgress - 0.3) * 5);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white md:left-28 xl:left-28 lg:left-6 left-5 items-center md:py-16 px-4 mt-[122rem] md:mt-[109rem]  lg:min-h-[100vh] xl:min-h-[150vh]"
      // style={{ marginTop: "109rem", minHeight: "150vh" }}
    >
      <div data-aos="flip-up" className="mb-10">
        <h2 className="xl:text-4xl lg:text-2xl text-xl md:text-center font-semibold text-gray-900">
          Solution
        </h2>
      </div>

      <div className="block md:hidden">
        <div className="relative w-72 h-[30rem] top-10 mx-auto">
          <img
            src={mobileframe}
            loading="lazy"
            alt="Mobile Frame"
            className="w-full h-full object-cover"
          />
          <div
            ref={frameContentRefs}
            className="absolute inset-0 top-[7%] bottom-[7%] left-[16%] right-[16%] overflow-y-auto hide-scrollbar"
          >
            <img
              src={mobilescreenshot}
              loading="lazy"
              alt="Mobile Screenshot"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex xl:gap-20 lg:gap-8 relative">
        <div className="w-full  xl:max-w-2xl lg:max-w-lg  ">
          {!isInFrame && (
            <div
              className="transition-all shadow-2xl shadow-black duration-[1200ms]"
              style={{
                transform: `translateY(0px) scale(1)`,
                opacity: 1,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform, opacity",
              }}
            >
              <img
                src={screenshot}
                loading="lazy"
                alt="Website Screenshot"
                className="w-full  "
                style={{
                  transform: "translateY(0px)",
                  transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
                  minHeight: "150%",
                  willChange: "transform, opacity",
                }}
              />
            </div>
          )}

          <div
            className={`${
              isInFrame
                ? "flex  xl:gap-10 relative xl:top-[1050px] lg:top-[630px] xl:left-40 lg:left-24"
                : "opacity-0"
            } 
    flex justify-center transition-all duration-500 ease-out`}
            style={{
              opacity: isInFrame ? 1 : 0,
              pointerEvents: isInFrame ? "auto" : "none",
              transform: isInFrame ? "translateY(0)" : "translateY(20px)",
              willChange: "transform, opacity",
            }}
          >
            <div className="relative">
              <img
                src={frame}
                loading="lazy"
                alt="Display Frame"
                className="w-full lg:min-w-[500px] lg:min-h-[400px] xl:min-w-[800px] xl:min-h-[600px]  lg:w-[30vw] lg:h-[30vh] xl:w-[60vw] xl:h-[80vh]    cover"
                // style={{
                //   width: "60vw",
                //   height: "80vh",
                //   minWidth: "800px",
                //   objectFit: "cover",
                // }}
              />
              <div
                ref={frameContentRef}
                className="absolute inset-0 xl:top-[11%] xl:bottom-[24%] xl:right-[17%] xl:left-[17%] lg:top-[11%] lg:bottom-[28%] lg:right-[17%] lg:left-[17%] overflow-y-auto hide-scrollbar"
                style={{
                  // top: "10%",
                  // bottom: "24%",
                  // left: "10%",
                  // right: "10%",
                  // padding: "1rem",
                  transition: "opacity 1s ease",
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={screenshot}
                  alt="Website Screenshot in Frame"
                  className="w-full lg:min-h-auto"
                  style={{
                    opacity: framedScreenshotOpacity,
                    minHeight: "150%",
                    transition: "opacity 1s ease",
                    willChange: "transform, opacity",
                  }}
                />
              </div>
            </div>
            <div className="block">
              <div className="relative w-72 lg:h-[27rem] xl:h-[30rem] top-10 mx-auto">
                <img
                  src={mobileframe}
                  alt="Mobile Frame"
                  className="w-full h-full object-cover"
                />
                <div
                  ref={frameContentRefs}
                  className="absolute inset-0 top-[7%] bottom-[7%] left-[16%] right-[16%] lg:top-[7%] lg:bottom-[7%] lg:left-[20%] lg:right-[20%]  xl:top-[7%] xl:bottom-[7%] xl:left-[16%] xl:right-[16%] overflow-y-auto hide-scrollbar"
                >
                  <img
                    src={mobilescreenshot}
                    alt="Mobile Screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 xl:w-60 lg:w-40 space-y-16">
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Highlight the product</h3>
            <p className="text-gray-700">
              Highlighting its usefulness allows addressing a neutral clientele.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Light and warm page</h3>
            <p className="text-gray-700">
              Thanks to the colors, borders, and illustrations.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Scroll;
