import React from "react";
import { RiPriceTag2Fill } from "react-icons/ri";
import { BiSolidSleepy } from "react-icons/bi";
import { CgInsertAfter } from "react-icons/cg";

const Cost = () => {
  return (
    <div className="relative left-28 top-[750px] mb-20">
      <div className="space-y-14">
        <div className="">
          <div className="flex items-center gap-16">
            <div className="text-2xl font-bold">
              <RiPriceTag2Fill />
              <h2>
                How much <br /> does it cost?
              </h2>
            </div>
            <div className="w-10">
              <hr className="border-t-2 border-black" />
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="700"
              className="w-[850px] text-xl font-medium "
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
          <div className="flex items-center gap-16">
            <div className="text-2xl font-bold">
              <CgInsertAfter />
              <h2> And after?</h2>
            </div>
            <div className="w-10">
              <hr className="border-t-2 border-black" />
            </div>
            <div className="w-[800px] text-xl pl-4 font-medium ">
              <p data-aos="fade-up-left" data-aos-duration="700">
                You can modify the content using the provided software (CMS)!
                Training hours are included to teach you how to modify or add
                content
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-16">
            <div className="text-2xl font-bold">
              <BiSolidSleepy />
              <h2>Sleep well</h2>
            </div>
            <div className="w-10">
              <hr className="border-t-2 border-black" />
            </div>
            <div className="w-[800px] pl-5 text-xl font-medium ">
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
