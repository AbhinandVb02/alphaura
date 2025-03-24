import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import customer1 from "../../assets/customer1.png";
import b_icon1 from "../../assets/b_icon1.png";
import b_icon2 from "../../assets/b_icon2.png";
import b_icon3 from "../../assets/b_icon3.png";
import b_icon4 from "../../assets/b_icon4.png";
import Tired from "../../assets/Tired.png";

export const UserExperience = () => {
  const personData = [
    { img: person1 },
    { img: person2 },
    { img: person3 },
    { img: person1 },
    { img: person2 },
    { img: person3 },
    { img: person1 },
  ];

  const qualityData = [
    { img: icon1, dis: "Made in THE USA" },
    { img: icon2, dis: "No Additives" },
    { img: icon3, dis: "All Natural" },
    { img: icon4, dis: "Fully science based" },
    { img: icon5, dis: "All Natural" },
    { img: icon6, dis: "3rd PARTY TESTED" },
  ];

  const clarification = [
    { title: "Science Backed" },
    { title: "All Natural Ingredients" },
    { title: "Money Back Guarantee" },
    { title: "Money Back Guarantee" },
  ];

  const benefit = [
    { img: b_icon1 },
    { img: b_icon2 },
    { img: b_icon3 },
    { img: b_icon4 },
  ];

  const extendedCards = [...personData, ...personData, ...personData];

  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(4);
  const singleCardWidth = 100 / cardsToShow;

  const resetPoint = personData.length * singleCardWidth;

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsToShow(3);
    } else if (width < 1024) {
      setCardsToShow(4);
    } else {
      setCardsToShow(7);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    const interval = setInterval(() => {
      moveCarousel();
    }, 3000);

    return () => clearInterval(interval);
  }, [position, isTransitioning]);

  const moveCarousel = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPosition((prev) => prev + singleCardWidth);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (position >= resetPoint) {
      setIsTransitioning(false);
      setPosition(0);
    }
  };
  return (
    <div className="my-12">
      <div className="flex gap-2 items-center justify-center w-full">
        <span className="flex gap-1 items-center">
          <FaStar style={{ color: "#D13CA0" }} />
          <FaStar style={{ color: "#D13CA0" }} />
          <FaStar style={{ color: "#D13CA0" }} />
          <FaStar style={{ color: "#D13CA0" }} />
          <FaStar style={{ color: "#D13CA0" }} />
        </span>
        <p className="text-[13px] lg:text-[19px] font-medium text-[#000000CC]">
          Rated <span className="text-[#D13CA0] font-bold">4.8/5</span> based on{" "}
          <span className="font-bold">+3,425</span> reviews
        </p>
      </div>
      <h1 className="uppercase text-center text-[35px] lg:text-[52px] font-black">
        HEAR IT FROM
      </h1>
      <h1 className="uppercase text-center text-[35px] lg:text-[52px] font-black">
        OTHERS
      </h1>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${position}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedCards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-1/4"
              style={{ width: `${singleCardWidth}%` }}
            >
              <img
                src={card.img}
                alt=""
                className="w-[162px] lg:w-[198px] h-[278px] lg:h-[341px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col  justify-center gap-4 items-center">
        <button className="bg-[#D13CA0] p-4 text-[#fff] text-[21px] font-bold w-full lg:w-[387px] text-center">
          SHOP NOW
        </button>
      </div>

      <div className="bg-[#D13CA0] mt-4 p-4 flex flex-col gap-14">
        <div>
          <h1 className="uppercase text-white text-[35px] text-center font-black">
            the highest quality
          </h1>
          <p className="flex lg:hidden text-white text-center text-[14px]">
            Potent blends of healing botanicals & all natural ingredients to
            make your hair look amazing.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 place-items-center px-0 lg:px-8">
          {qualityData.map((val, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img
                src={val.img}
                alt=""
                className="w-[52px] h-[52px] lg:w-[67px] lg:h-[67px]"
              />
              <p className="text-white text-center text-[14px] lg:text-[17px]">
                {val.dis}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center">
          <img
            src={customer1}
            alt="customer1"
            className="w-auto h-auto lg:w-[419px] lg:h-[419px] px-4 lg:px-0"
          />
          <div className="flex flex-col gap-2 px-4">
            <div>
              <h1 className="text-[35px] lg:text-[38px] font-black">
                WHY BLOOM IS THE{" "}
              </h1>
              <h1 className="text-[35px] lg:text-[38px] font-black">
                {" "}
                BEST SERUM
              </h1>
            </div>
            <p className="w-auto lg:w-[427px] text-[16px] lg:text-[19px]">
              Potent blends of healing botanicals & all natural ingredients to
              make your hair look amazing:
            </p>

            {clarification.map((val, index) => (
              <div className="flex items-center gap-2" key={index}>
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
                    strokeWidth="1.25197"
                  />
                </svg>
                <p className="text-[18px] lg:text-[20px] font-black">
                  {val.title}
                </p>
              </div>
            ))}

            <div className="mt-4 flex flex-col justify-center gap-4 items-center">
              <button className="bg-[#D13CA0] p-4 text-[#fff] text-[21px] font-bold w-full lg:w-[387px] text-center">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D13CA0] mt-4 p-4 flex flex-col gap-14">
        <div>
          <h1 className="uppercase text-white text-center text-[35px] lg:text-[52px] font-black">
            Unlimited
          </h1>
          <h1 className="uppercase text-white text-center text-[35px] lg:text-[52px] font-black">
            Benefits
          </h1>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center px-0 lg:px-8">
            {benefit.map((val, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-2 px-6 rounded-sm"
              >
                <img
                  src={val.img}
                  alt=""
                  className="w-[75px] h-[75px] lg:w-[67px] lg:h-[67px]"
                />
                <div>
                  <h1 className="text-[22px] font-black">Lorem Ipsum</h1>
                  <p className="text-[15px] w-[286px]">
                    Lorem Ipsum Dolor Es. Lorem Ipsum Dolor Es. Lorem Ipsum
                    Dolor Es.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-center">
          <div className="grid grid-cols-2 gap-4 place-items-center px-0 lg:px-8">
            {benefit.map((val, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={Tired}
                  alt=""
                  className="w-[48px] h-[48px] lg:w-[67px] lg:h-[67px]"
                />
                <div>
                  <h1 className="text-[22px] font-black text-white text-center">Lorem Ipsum</h1>
                  <p className="text-[15px] text-center text-white">
                    Lorem Ipsum Dolor Es. Lorem Ipsum Dolor Es. Lorem Ipsum
                    Dolor Es.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
