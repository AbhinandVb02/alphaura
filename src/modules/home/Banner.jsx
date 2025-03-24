import React from "react";
import Img2 from "../../assets/image 2.png";
import { FaStar, FaCheck } from "react-icons/fa6";

export const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 lg:mt-0">
      <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_bottom,#FFFFFF40,#D13CA01A)] px-4">
        <div className="w-full max-w-[531px] flex flex-col items-center lg:items-start">
          <div className="flex gap-2 items-center lg:justify-start justify-center w-full">
            <span className="flex gap-1 items-center">
              <FaStar style={{ color: "#D13CA0" }} />
              <FaStar style={{ color: "#D13CA0" }} />
              <FaStar style={{ color: "#D13CA0" }} />
              <FaStar style={{ color: "#D13CA0" }} />
              <FaStar style={{ color: "#D13CA0" }} />
            </span>
            <p className="text-[13px] lg:text-[19px] font-medium text-[#000000CC]">
              Rated <span className="text-[#D13CA0] font-bold">4.8/5</span>{" "}
              based on <span className="font-bold">+3,425</span> reviews
            </p>
          </div>

          <h1 className="text-[30px] lg:text-[52px] text-center lg:text-left font-black text-[#000000]">
            GROW YOUR HAIR ONCE & FOR ALL
          </h1>

          <p className="text-[16px] lg:text-[22px] text-center lg:text-left font-medium text-[#000000CC]">
            All Natural Science Backed Hair Blend to make you feel and look your
            best.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4 w-full">
            <div className="bg-[#D13CA01A] text-black py-2 px-4 w-[109px] lg:w-[153px] flex flex-col gap-2 justify-center items-center">
              <FaCheck style={{ color: "#D13CA0", fontSize: "22px" }} />
              <p className="text-[13px] lg:text-[14px] font-bold text-center">
                LOOK & FEEL YOUNG
              </p>
            </div>

            <div className="bg-[#D13CA01A] text-black py-2 px-4 w-[109px] lg:w-[153px] flex flex-col gap-2 justify-center items-center">
              <FaCheck style={{ color: "#D13CA0", fontSize: "22px" }} />
              <p className="text-[13px] lg:text-[14px] font-bold text-center">
                THICH AND LUSH HAIR
              </p>
            </div>

            <div className="bg-[#D13CA01A] text-black py-2 px-4 w-[109px] lg:w-[153px] flex flex-col gap-2 justify-center items-center">
              <FaCheck style={{ color: "#D13CA0", fontSize: "22px" }} />
              <p className="text-[13px] lg:text-[14px] font-bold text-center">
                REGROW YOUR HAIR{" "}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-start ">
            <button className="mt-[19px] bg-[#D13CA0] p-4 text-[#fff] text-[21px] font-bold w-full lg:w-auto text-center relative z-20">
              SHOP BLOOM NOW RISK FREE
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[linear-gradient(to_bottom,#FFFFFF40,#D13CA01A)]">
        <img
          src={Img2}
          alt="img1"
          className="w-[375px] h-[359px] lg:w-[846px] lg:h-[796px] -mt-12 sm:mt-0 z-0"
        />
      </div>
    </div>
  );
};
