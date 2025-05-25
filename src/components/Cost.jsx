import React from "react";
import { RiPriceTag2Fill } from "react-icons/ri";
import { BiSolidSleepy } from "react-icons/bi";
import { CgInsertAfter } from "react-icons/cg";

const Cost = () => {
  return (
    <div className="relative left-5 md:left-12 xl:left-28 top-32 lg:top-[50px] xl:top-[750px] mb-20">
      <div className="space-y-14">
        <div className="">
          <div className="md:flex items-center xl:gap-16 lg:gap-7">
            <div className="md:text-xl xl:text-2xl font-bold ">
              <RiPriceTag2Fill className="text-purple-700 md:text-black text-2xl md:text-lg xl:text-2xl " />
              <h2 className="text-2xl md:text-lg xl:text-2xl">
                How much <br /> does it cost?
              </h2>
            </div>
            <div className="w-10">
              <hr className="border-t-2 border-black" />
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="700"
              className="md:w-[500px] xl:w-[850px] w-[350px]  md:text-lg xl:text-xl font-medium "
            >
              <p>
                Tell me about your project, the cost will depend on the time
                needed . E.g Landing page, Recreation and the likes
              </p>
              <p>
                For larger projects, the rate will be based on the time
                required. I will then send you a quote.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="md:flex items-center xl:gap-16 lg:gap-7">
            <div className="md:text-2xl font-bold">
              <CgInsertAfter className="text-purple-700 md:text-black  text-4xl md:text-2xl" />
              <h2 className="text-2xl md:text-lg xl:text-2xl"> And after?</h2>
            </div>
            <div className="w-10">
              <hr className="border-t-2 border-black" />
            </div>
            <div className="md:w-[500px] xl:w-[800px] w-[350px]  md:text-lg xl:text-xl md:pl-4 font-medium ">
              <p data-aos="fade-up-left" data-aos-duration="700">
                You can modify the content using the provided software (CMS)!
                Training hours are included to teach you how to modify or add
                content
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="md:flex items-center xl:gap-16 lg:gap-7">
            <div className="md:text-2xl font-bold">
              <BiSolidSleepy className="text-purple-700 md:text-black text-2xl xl:text-2xl lg:text-lg" />
              <h2 className="text-2xl md:text-lg xl:text-2xl">Sleep well</h2>
            </div>
            <div className="w-10">
              <hr className="border-t-2 border-black" />
            </div>
            <div className=" md:w-[500px] xl:w-[800px] w-[350px]   xl:text-xl md:pl-5 md:text-xl font-medium ">
              <p data-aos="fade-up-left" data-aos-duration="700">
                You can leave the support and update of your content to me,
                based on a monthly subscription.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
