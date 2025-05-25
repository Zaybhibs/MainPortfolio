import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import blog from "../assets/carouselone.png";
import blog2 from "../assets/Blank 2 Grids Collage.png";
import ecommerce from "../assets/frameEcommercepreview.png";
import ecommerce2 from "../assets/Blank 2 Grids Collage (1).png";
import "../index.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const images = [blog, blog2];
const images2 = [ecommerce, ecommerce2];

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % images2.length);
        setCurrentIndex1((prev) => (prev + 1) % images.length);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative md:left-1 xl:left-20 md:mt-[200px] xl:mt-[950px] mt-[250px] px-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-4xl font-bold">Projects&gt;</h1>

        <BsStars className="text-3xl text-purple-700" />
      </div>
      <p className="note pt-2">
        [Demo limited - free database expired] Fully functional code available
        in repository
      </p>

      <div className="mt-10 grid  md:grid-cols-2">
        {/* BibiCart Project */}
        <div
          className="bg-gradient-to-b from-green-100 to-gray-200 py-6 px-4 rounded-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-black text-xl font-medium mb-6">.BibiCart</h1>
          <div className="overflow-hidden w-full h-64 relative flex justify-center items-center scales">
            {isHovered ? (
              <div className="flex w-full justify-center pt-[95px] md:pt-[48px] gap-4 h-full">
                <img
                  src={images2[0]}
                  alt="Slide 1"
                  className="w-[50%] h-[73%]  xl:w-[48%] xl:h-[76%] md:w-[62%] md:h-[56%]  object-cover"
                />
                <img
                  src={images2[1]}
                  alt="Slide 2"
                  className=" w-[50%] h-[73%]  xl:w-[48%] xl:h-[76%] md:w-[62%] md:h-[56%]  object-cover"
                />
              </div>
            ) : (
              <img
                src={images2[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="md:w-[81%] md:h-[68%] xl:w-[60%] xl:h-[80%]   w-[85%] h-[73%] object-cover transition-opacity duration-1000 ease-in-out"
              />
            )}
          </div>
          <div className="mt-7 lg:mt-5 xl:mt-7">
            <FaExternalLinkSquareAlt />
            <h3 className="md:text-xl xl:text-2xl font-medium underline">
              <a
                href="https://ecommerce-brown-rho-43.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to the platform <br /> Ecommerce
              </a>
            </h3>
          </div>
        </div>

        {/* BibiEpicurenBlog Project */}
        <div
          className="bg-gradient-to-b from-yellow-100 to-green-50 py-6 px-4 rounded-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-black text-xl font-medium mb-6">
            .BibiEpicurenBlog
          </h1>
          <div className="overflow-hidden w-full h-64 relative flex justify-center items-center scales">
            {isHovered ? (
              <div className="flex w-full justify-center pt-[95px] md:pt-[48px] gap-4 h-full">
                <img
                  src={images[0]}
                  alt="Slide 1"
                  className=" w-[50%] h-[73%] xl:w-[48%] xl:h-[76%] md:w-[62%] md:h-[56%] object-cover"
                />
                <img
                  src={images[1]}
                  alt="Slide 2"
                  className=" w-[50%] h-[73%] xl:w-[48%] xl:h-[76%] md:w-[62%] md:h-[56%] object-cover"
                />
              </div>
            ) : (
              <img
                src={images[currentIndex1]}
                alt={`Slide ${currentIndex1 + 1}`}
                className="md:w-[81%] md:h-[68%] xl:w-[60%] xl:h-[80%] w-[85%] h-[73%] object-cover transition-opacity duration-1000 ease-in-out"
              />
            )}
          </div>
          <div className="mt-7 lg:mt-5 xl:mt-7">
            <FaExternalLinkSquareAlt />
            <h3 className="md:text-xl xl:text-2xl font-medium underline">
              <a
                href="https://bibis-epicurean-blog.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to the platform <br /> Food Blog Website
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
