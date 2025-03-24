import React from "react";
import Moisturizer from "../../assets/Moisturizer.png";
import handwithdrop from "../../assets/handwithdrop.png";

export const Reason = () => {
  const reasons = [
    { title: "Science Backed" },
    { title: "All Natural Ingredients" },
    { title: "Money Back Guarantee" },
  ];
  return (
    <div>
      <div className="flex items-center justify-center p-2 gap-4">
        {reasons.map((val, ind) => (
          <div key={ind} className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
            >
              <path
                d="M15.2354 8.95618L15.2351 8.95649L9.92704 14.2645L9.92328 14.2683L9.92202 14.2696C9.89319 14.2985 9.85892 14.3215 9.82118 14.3372L10.0616 14.9152L9.82117 14.3372C9.78343 14.3529 9.74295 14.361 9.70206 14.361C9.66118 14.361 9.6207 14.3529 9.58296 14.3372L9.34257 14.9152L9.58295 14.3372C9.54521 14.3215 9.51094 14.2985 9.48211 14.2695L9.48084 14.2683L9.47709 14.2645L6.82448 11.6119L6.82455 11.6119L6.81672 11.6043C6.78683 11.5754 6.76298 11.5409 6.74658 11.5027L6.17142 11.7498L6.74658 11.5027C6.73018 11.4645 6.72154 11.4234 6.72118 11.3819C6.72082 11.3403 6.72874 11.2991 6.74448 11.2606C6.76022 11.2222 6.78346 11.1872 6.81284 11.1578L6.37021 10.7152L6.81284 11.1578C6.84223 11.1285 6.87718 11.1052 6.91564 11.0895L6.6786 10.5101L6.91564 11.0895C6.95411 11.0737 6.99532 11.0658 7.03688 11.0662C7.07844 11.0665 7.11951 11.0752 7.1577 11.0916C7.19588 11.108 7.23042 11.1318 7.25929 11.1617L7.25922 11.1618L7.26702 11.1696L9.25953 13.1612L9.70217 13.6036L10.1447 13.1611L14.7926 8.51312L14.8071 8.49869C14.8641 8.4486 14.9377 8.42077 15.0141 8.42082C15.0972 8.42088 15.1769 8.45397 15.2357 8.51281C15.2945 8.57164 15.3274 8.65141 15.3274 8.73456C15.3273 8.81771 15.2942 8.89743 15.2354 8.95618ZM11.0298 21.4055C16.5615 21.4055 21.0455 16.9214 21.0455 11.3898C21.0455 5.85807 16.5615 1.37402 11.0298 1.37402C5.49809 1.37402 1.01403 5.85807 1.01403 11.3898C1.01403 16.9214 5.49809 21.4055 11.0298 21.4055Z"
                stroke="#D13CA0"
                stroke-width="1.25197"
              />
            </svg>
            <p className="text-[14px] md:text-[16px] font-black text-[#D13CA0]">
              {val.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col bg-[#151020] py-12 lg:py-0 px-4">
        <div className="bg-[#151020]">
          <h1 className="text-[#fff] text-[30px] lg:text-[70px] font-semibold">
            6 Reasons you need
          </h1>
          <h1 className="text-[#D13CA0] text-[30px] lg:text-[70px] font-black transform lg:-translate-y-8">
            Bloom Serum
          </h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[5fr_2fr_5fr] gap-8 items-center">
          <div className="lg:hidden relative w-full h-[300px]">
            <img
              src={handwithdrop}
              alt="Hand holding Bloom Serum"
              className="absolute bottom-0 right-[14px] max-w-[337px] h-auto max-h-[260px] object-contain -rotate-90"
            />
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-[#D13CA01F] flex items-center gap-2">
              <img src={Moisturizer} alt="" className="h-[28px] w-[28px]" />
              <p className="text-[#D13CA0] tetx-[19px] font-bold uppercase">
                Reduce Frizziness & Moisturize Hair
              </p>
            </div>
            <div className="p-8 bg-[#D13CA01F] flex items-center gap-2">
              <img src={Moisturizer} alt="" className="h-[28px] w-[28px]" />
              <p className="text-[#D13CA0] tetx-[19px] font-bold uppercase">
                Reduce Frizziness & Moisturize Hair
              </p>
            </div>
            <div className="p-8 bg-[#D13CA01F] flex items-center gap-2">
              <img src={Moisturizer} alt="" className="h-[28px] w-[28px]" />
              <p className="text-[#D13CA0] tetx-[19px] font-bold uppercase">
                Reduce Frizziness & Moisturize Hair
              </p>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={handwithdrop}
              alt="Hand holding Bloom Serum"
              className="max-w-[511px] h-auto max-h-[394px] object-contain"
            />
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-[#D13CA01F] flex items-center gap-2">
              <img src={Moisturizer} alt="" className="h-[28px] w-[28px]" />
              <p className="text-[#D13CA0] tetx-[19px] font-bold uppercase">
                Reduce Frizziness & Moisturize Hair
              </p>
            </div>
            <div className="p-8 bg-[#D13CA01F] flex items-center gap-2">
              <img src={Moisturizer} alt="" className="h-[28px] w-[28px]" />
              <p className="text-[#D13CA0] tetx-[19px] font-bold uppercase">
                Reduce Frizziness & Moisturize Hair
              </p>
            </div>
            <div className="p-8 bg-[#D13CA01F] flex items-center gap-2">
              <img src={Moisturizer} alt="" className="h-[28px] w-[28px]" />
              <p className="text-[#D13CA0] tetx-[19px] font-bold uppercase">
                Reduce Frizziness & Moisturize Hair
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
