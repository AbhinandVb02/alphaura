import React, { useState } from "react";
import ProductImg from "../../assets/ProductImg.png";
import Box from "../../assets/Box.png";
import Lock from "../../assets/Lock.png";
import { FaStar } from "react-icons/fa6";

export const Product = () => {
  const clarification = [
    { title: "Science Backed" },
    { title: "All Natural Ingredients" },
    { title: "Money Back Guarantee" },
  ];

  const subImgs = [{}, {}, {}];

  const offers = [
    { img: "", title: "FREE LASH SERUM", isLock: false },
    { img: Box, title: "FREE SHIPPING", isLock: false },
    { img: "", title: "FREE $50 GIFT CARD", isLock: true },
    { img: "", title: "FREE $100 GIFT CARD", isLock: true },
  ];

  const [selectedOption, setSelectedOption] = useState("subscribe");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const subscriptionOptions = [
    {
      id: "subscribe",
      label: ["Subscribe &", "Save 20%"],
      originalPrice: "$150.99",
      price: "$99.99",
    },
    {
      id: "onetime",
      label: ["One Time"],
      originalPrice: "$150.99",
      price: "$120.99",
    },
  ];

  const packageOptions = [
    {
      id: "30day",
      label: "30 Day Supply",
      price: "$40",
      hasSavings: false,
    },
    {
      id: "buy2get1",
      label: "Buy 2 Get 1 FREE",
      originalPrice: "$94",
      price: "$199",
      savings: "$20",
    },
    {
      id: "buy3get3",
      label: "Buy 3 Get 3 FREE",
      originalPrice: "$94",
      price: "$379",
      savings: "$25",
    },
    {
      id: "buy6get6",
      label: "Buy 6 Get 6 FREE",
      originalPrice: "$94",
      price: "$599",
      savings: "$30",
    },
  ];

  const benefits = [
    { id: "vip", label: "VIP SALES" },
    { id: "auto", label: "Auto Replenish" },
    { id: "cancel", label: "Easy Cancellation" },
  ];

  const accordionItems = [
    {
      title: "Product Details",
      content:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Risk Free Guarantee",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Shipping & Deliveries",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Returns",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex flex-col gap-4 px-4">
            <img
              src={ProductImg}
              alt="customer1"
              className="w-auto h-auto lg:w-[511px] lg:h-[487px] "
            />
            <div className="flex items-center gap-2">
              {subImgs.map((_, index) => {
                return (
                  <img
                    key={index}
                    src={ProductImg}
                    alt="customer1"
                    className="w-[50px] h-[50px] lg:w-[96px] lg:h-[96px]"
                  />
                );
              })}
            </div>

            <p className="text-[18px] font-bold text-center">
              <span className="text-[#D13CA0]">EXCLUSIVE SALE!</span> FREE GIFTS
              WITH YOUR ORDER!
            </p>
            <div className="flex items-center gap-2">
              {offers.map((val, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`h-[81px] w-[81px] lg:h-[166px] lg:w-[166px] border-2 border-dotted flex items-center justify-center ${
                        val.isLock
                          ? "border-[#7C7C7C] "
                          : "border-[#D13CA0] bg-[#D13CA00D]"
                      }`}
                    >
                      {val.img && (
                        <img
                          src={val?.img}
                          alt=""
                          className="h-[50px] w-[50px] lg:h-[72px] lg:w-[72px]"
                        />
                      )}

                      {val.isLock && (
                        <img
                          src={Lock}
                          alt=""
                          className="h-[28px] w-[23]px] lg:h-[40px] lg:w-[33px]"
                        />
                      )}
                    </div>
                    <p className="text-center break-words text-[10px] lg:text-[15px] font-bold">
                      {val.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* //----------------------------- */}
          <div className="flex flex-col gap-2 px-4">
            <div className="flex gap-2 items-center w-full">
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

            <div>
              <h1 className="text-[35px] lg:text-[38px] font-black max-w-[490px]">
                BLOOM HAIR GROWTH REVIVAL SERUM
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-[16px] lg:text-[20px] text-[#999999] line-through">
                $150.99
              </p>
              <p className="text-[28px] lg:text-[36px] font-bold">$99.99</p>
              <button className="bg-[#D13CA0] p-1 px-3 text-[#fff] text-[19px] font-bold text-center">
                Save $50
              </button>
            </div>

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

            <div className="border-2 border-[#D13CA0]">
              <div className="grid grid-cols-2">
                {subscriptionOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`p-4 flex items-center gap-3 ${
                      selectedOption === option.id
                        ? "bg-[#D13CA0] text-white"
                        : "bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      id={option.id}
                      name="pricing"
                      checked={selectedOption === option.id}
                      onChange={() => setSelectedOption(option.id)}
                      className="w-5 h-5"
                    />
                    <label htmlFor={option.id} className="flex flex-col">
                      {option.label.map((line, i) => (
                        <span
                          key={i}
                          className="font-bold text-[12px] lg:text-[16px]"
                        >
                          {line}
                        </span>
                      ))}
                    </label>
                    <div className="ml-auto flex flex-col items-end">
                      <span className="text-sm line-through">
                        {option.originalPrice}
                      </span>
                      <span className="text-[14px] lg:text-[18px] font-bold">
                        {option.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {packageOptions.map((option) => (
                <div
                  key={option.id}
                  className={`border border-[#E4E4E4] p-4 m-2 flex items-center ${
                    selectedOption === option.id ? "bg-[#D13CA00D]" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={option.id}
                    name="pricing"
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                    className="w-5 h-5"
                  />
                  <label
                    htmlFor={option.id}
                    className={`ml-3 ${
                      selectedOption === option.id ? "font-bold" : ""
                    }`}
                  >
                    {option.label}
                  </label>
                  <div className="ml-auto flex items-center gap-2">
                    {option.savings && (
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          selectedOption === option.id ? "bg-[#D13CA0] text-white" : "bg-[#D13CA01A] text-[#D13CA0]"
                        }`}
                      >
                        SAVE {option.savings}
                      </span>
                    )}
                    <div className="flex flex-col items-end">
                      {option.originalPrice && (
                        <span className="text-xs line-through">
                          {option.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold">{option.price}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-4 mt-4 flex justify-around">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-2">
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
                    <span className="text-sm font-bold">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col  justify-center gap-4 items-center">
              <button className="bg-[#D13CA0] p-4 text-[#fff] text-[21px] font-bold w-full text-center">
                ADD TO CART{" "}
              </button>
            </div>

            <div className="w-full space-y-2 mt-4">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className={`border-t-2 border-[#D7D2CB] overflow-hidden ${
                    accordionItems.length - 1 == index && "border-b-2"
                  }`}
                >
                  <button
                    className="w-full p-4 text-left text-[12px] lg:text-[18px] font-bold flex justify-between items-center bg-white hover:bg-gray-50"
                    onClick={() => toggleItem(index)}
                  >
                    {item.title}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openItem === index ? "transform rotate-45" : ""
                      }`}
                    >
                      <path
                        d="M14.6618 6.78015H8.91976V1.03807C8.91976 0.784252 8.81893 0.540832 8.63946 0.361358C8.45998 0.181883 8.21656 0.0810547 7.96275 0.0810547C7.70893 0.0810547 7.46551 0.181883 7.28604 0.361358C7.10656 0.540832 7.00573 0.784252 7.00573 1.03807V6.78015H1.26365C1.00984 6.78015 0.766418 6.88098 0.586944 7.06045C0.407469 7.23992 0.306641 7.48335 0.306641 7.73716C0.306641 7.99098 0.407469 8.2344 0.586944 8.41387C0.766418 8.59335 1.00984 8.69417 1.26365 8.69417H7.00573V14.4363C7.00573 14.6901 7.10656 14.9335 7.28604 15.113C7.46551 15.2924 7.70893 15.3933 7.96275 15.3933C8.21656 15.3933 8.45998 15.2924 8.63946 15.113C8.81893 14.9335 8.91976 14.6901 8.91976 14.4363V8.69417H14.6618C14.9157 8.69417 15.1591 8.59335 15.3386 8.41387C15.518 8.2344 15.6189 7.99098 15.6189 7.73716C15.6189 7.48335 15.518 7.23992 15.3386 7.06045C15.1591 6.88098 14.9157 6.78015 14.6618 6.78015Z"
                        fill="black"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 bg-white ${
                      openItem === index ? "max-h-96 p-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
