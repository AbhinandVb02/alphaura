import React from "react";
import Guaranteed from "../../assets/Guaranteed.png";
import { FaStar } from "react-icons/fa6";

export const Satisfaction = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center border border-[#D13CA0] max-w-[941px] m-2 lg:m-auto p-8 rounded-xl">
      <p className="uppercase text-[#D13CA0] text-[10px] lg:text-[12px] bg-[#D13CA01F] p-2 rounded-full">
        Our Guarantee
      </p>
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase text-[28px] lg:text-[44px] font-bold">
          100% Satisfaction
        </h1>
        <h1 className="uppercase text-[28px] lg:text-[44px] font-bold">
          Guarantee
        </h1>
        <img
          src={Guaranteed}
          alt="Guaranteed"
          className="w-[122px] h-[122px] lg:w-[150px] lg:h-[150px]"
        />
      </div>
      <p className="max-w-[539px] text-center">
        The market awareness level of women aged 45+ experiencing hair loss
        varies based on their familiarity with solutions and the problem itself.
        Here's a breakdown:
      </p>
      <p className="max-w-[539px] text-center">
        If you are not 100% satisfied, or you do not see adequate results within
        those 30 days, simply request your money back and you will be refunded
        in full.
      </p>

      <div className="flex flex-col justify-center gap-2">
        <div className="mt-4 flex flex-col  justify-center gap-4 items-center">
          <button className="bg-[#D13CA0] p-4 text-[#fff] text-[21px] font-bold w-full lg:w-[387px] text-center">
            SHOP NOW
          </button>
        </div>

        <div className="flex gap-2 items-center justify-center w-full">
          <span className="flex gap-1 items-center">
            <FaStar style={{ color: "#D13CA0" }} />
            <FaStar style={{ color: "#D13CA0" }} />
            <FaStar style={{ color: "#D13CA0" }} />
            <FaStar style={{ color: "#D13CA0" }} />
            <FaStar style={{ color: "#D13CA0" }} />
          </span>
          <p className="text-[13px] lg:text-[19px] font-medium text-[#000000CC]">
            Rated <span className="text-[#D13CA0] font-bold">4.8/5</span> based
            on <span className="font-bold">+3,425</span> reviews
          </p>
        </div>
      </div>
    </div>
  );
};
