import React, { useState, useEffect, useRef } from "react";
import Img3 from "../../assets/image 3.png";
import { FaStar } from "react-icons/fa6";

export const CardComponent = () => {
  const cards = [
    {
      id: 1,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 2,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 3,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 4,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 5,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 6,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 7,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
    {
      id: 8,
      title: "Super Convenient",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget nulla ",
      image: Img3,
    },
  ];

  const extendedCards = [...cards, ...cards, ...cards];

  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(4);
  const singleCardWidth = 100 / cardsToShow;

  const resetPoint = cards.length * singleCardWidth;

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsToShow(1);
    } else if (width < 1024) {
      setCardsToShow(2);
    } else {
      setCardsToShow(4);
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
    <div className="bg-[#F8F8F8] p-6">
      <h1 className="uppercase text-center text-[35px] lg:text-[52px] font-black">Loved By</h1>
      <h1 className="uppercase text-center text-[35px] lg:text-[52px] font-black">
        Thousands
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
              key={`${card.id}-${index}`}
              className="flex-none w-full lg:w-1/4"
              style={{ width: `${singleCardWidth}%` }}
            >
              <div className="mx-2 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center text-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="flex gap-1 items-center justify-center">
                    <FaStar style={{ color: "#D13CA0" }} />
                    <FaStar style={{ color: "#D13CA0" }} />
                    <FaStar style={{ color: "#D13CA0" }} />
                    <FaStar style={{ color: "#D13CA0" }} />
                    <FaStar style={{ color: "#D13CA0" }} />
                  </span>
                  <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-700">{card.dis}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p>Andrew C</p>
                    <p className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                      >
                        <path
                          d="M13.1644 6.39092C13.1524 5.96059 13.0212 5.54159 12.7847 5.1812C12.5489 4.82148 12.2171 4.53371 11.8268 4.35119C11.9753 3.94684 12.0066 3.50918 11.92 3.08751C11.8328 2.66518 11.6289 2.27615 11.3325 1.96373C11.0194 1.6673 10.6311 1.46412 10.2087 1.37619C9.78706 1.28959 9.3494 1.3209 8.94505 1.46945C8.7632 1.07843 8.47609 0.74602 8.11571 0.510205C7.75532 0.274391 7.33632 0.142494 6.90532 0.131836C6.47499 0.14316 6.05732 0.273724 5.6976 0.510205C5.33789 0.746686 5.05211 1.07909 4.87159 1.46945C4.46657 1.3209 4.02758 1.28826 3.60458 1.37619C3.18158 1.46279 2.79189 1.66663 2.4788 1.96373C2.18237 2.27682 1.97986 2.66651 1.89393 3.08818C1.80733 3.50985 1.84064 3.9475 1.98985 4.35119C1.59883 4.53371 1.26575 4.82082 1.02861 5.18054C0.791459 5.54025 0.658897 5.95992 0.64624 6.39092C0.659563 6.82191 0.791459 7.24092 1.02861 7.6013C1.26575 7.96102 1.59883 8.24879 1.98985 8.43065C1.84064 8.83433 1.80733 9.27199 1.89393 9.69366C1.98053 10.116 2.18237 10.505 2.47813 10.8181C2.79122 11.1132 3.18025 11.3157 3.60192 11.403C4.02359 11.4909 4.46124 11.4589 4.86559 11.3124C5.04812 11.7027 5.33522 12.0345 5.69561 12.271C6.05532 12.5068 6.47499 12.638 6.90532 12.65C7.33632 12.6393 7.75532 12.5081 8.11571 12.2723C8.47609 12.0365 8.7632 11.7034 8.94505 11.3131C9.3474 11.4723 9.78839 11.5102 10.2127 11.4223C10.6364 11.3344 11.0254 11.1245 11.3318 10.8181C11.6383 10.5117 11.8488 10.1227 11.9367 9.69832C12.0246 9.27399 11.9867 8.833 11.8268 8.43065C12.2171 8.24813 12.5489 7.96102 12.7854 7.60063C13.0212 7.24092 13.1524 6.82125 13.1644 6.39092ZM6.01402 8.95557L3.72982 6.67203L4.59114 5.80471L5.97139 7.18496L8.90242 3.99147L9.79972 4.82148L6.01402 8.95557Z"
                          fill="black"
                        />
                      </svg>{" "}
                      VERIFIED CUSTOMER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col  justify-center gap-4 items-center">
        <button className="bg-[#D13CA0] p-4 text-[#fff] text-[21px] font-bold w-full lg:w-[387px] text-center">
          SHOP NOW
        </button>

        <div className="flex items-center flex-col lg:flex-row gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M11.4585 0.839844C12.8197 0.839844 13.9223 2.33268 15.1293 2.84542C16.3363 3.35816 18.2239 3.07683 19.1405 4.04786C20.057 5.01888 19.8256 6.80212 20.3429 8.05901C20.8602 9.31589 22.3485 10.3686 22.3485 11.7298C22.3485 13.0911 20.8556 14.1937 20.3429 15.4007C19.8302 16.6077 20.1115 18.4953 19.1405 19.4118C18.1694 20.3284 16.3862 20.1061 15.1293 20.6143C13.8724 21.1225 12.8197 22.6198 11.4585 22.6198C10.0972 22.6198 8.99462 21.127 7.78764 20.6143C6.58067 20.1015 4.69307 20.3829 3.77649 19.4118C2.85992 18.4408 3.08226 16.6576 2.57406 15.4007C2.06586 14.1438 0.568481 13.0911 0.568481 11.7298C0.568481 10.3686 2.06132 9.26598 2.57406 8.05901C3.08679 6.85203 2.80547 4.96443 3.77649 4.04786C4.74752 3.13128 6.53076 3.35362 7.78764 2.84542C9.04453 2.33722 10.0972 0.839844 11.4585 0.839844ZM11.4585 4.27927C9.9849 4.27927 8.5444 4.71624 7.31916 5.53492C6.09392 6.3536 5.13896 7.51722 4.57505 8.87863C4.01113 10.24 3.86358 11.7381 4.15107 13.1834C4.43855 14.6286 5.14815 15.9562 6.19013 16.9982C7.23211 18.0402 8.55968 18.7498 10.0049 19.0373C11.4502 19.3247 12.9483 19.1772 14.3097 18.6133C15.6711 18.0494 16.8347 17.0944 17.6534 15.8692C18.4721 14.6439 18.9091 13.2034 18.9091 11.7298C18.9031 9.75567 18.1162 7.86406 16.7202 6.4681C15.3243 5.07214 13.4327 4.28525 11.4585 4.27927ZM14.9161 8.43108L15.6466 9.12078C15.7213 9.21936 15.7617 9.33967 15.7617 9.46336C15.7617 9.58706 15.7213 9.70736 15.6466 9.80594L11.041 14.9379C10.95 15.0411 10.8373 15.1231 10.7111 15.1779C10.5849 15.2328 10.4481 15.2593 10.3105 15.2555C10.1736 15.2547 10.0382 15.2262 9.91265 15.1716C9.78708 15.117 9.6739 15.0375 9.57996 14.9379L7.08887 12.4558C7.04324 12.4167 7.00583 12.369 6.97881 12.3153C6.9518 12.2616 6.93571 12.2031 6.93149 12.1432C6.92727 12.0832 6.935 12.023 6.95422 11.9661C6.97345 11.9092 7.00379 11.8566 7.04349 11.8115L7.08887 11.7616L7.82848 11.0764C7.91756 10.9806 8.04069 10.9236 8.17137 10.9177C8.30206 10.9117 8.42986 10.9573 8.52726 11.0447L8.55902 11.0764L10.3241 12.8914L14.2218 8.44469C14.3131 8.35275 14.4366 8.29992 14.5662 8.29738C14.6957 8.29484 14.8212 8.34279 14.9161 8.43108Z"
                fill="black"
              />
            </svg>
            <p>30 Day Risk-Free</p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="20"
              viewBox="0 0 33 20"
              fill="none"
            >
              <path
                d="M30.2225 9.10004C30.1223 9.0787 30.0276 9.05862 29.9434 9.03644C28.9888 8.78495 28.5532 8.6471 28.2311 8.01697L27.0109 5.51411C26.6187 4.74712 25.6062 4.12308 24.7537 4.12308H22.5814V1.23291C22.5814 0.713976 22.1647 0.291748 21.6524 0.291748L6.52237 0.307142C6.02386 0.307142 5.64794 0.708518 5.64794 1.24082V2.09507H1.77204C0.971645 2.09514 0.320435 2.75486 0.320435 3.56587C0.320435 4.37688 0.971645 5.0366 1.77204 5.0366H5.64788V6.44625H3.11023C2.30984 6.44625 1.65863 7.10604 1.65863 7.91698C1.65863 8.72792 2.30984 9.38771 3.11023 9.38771H5.64788V10.7974H4.44843C3.64804 10.7974 2.99683 11.4571 2.99683 12.2681C2.99683 13.079 3.64804 13.7388 4.44843 13.7388H5.64788V15.2132C5.64788 15.7321 6.06461 16.1544 6.5768 16.1544H8.15064C8.39575 17.8563 9.84563 19.1677 11.5926 19.1677C13.3397 19.1677 14.7897 17.8563 15.0349 16.1544H21.4043C21.4374 16.1544 21.4713 16.1521 21.5051 16.1499C21.7484 17.854 23.1991 19.1677 24.9477 19.1677C26.6948 19.1677 28.1447 17.8563 28.3899 16.1544H30.6505C31.5404 16.1544 32.2644 15.4209 32.2644 14.5193V11.745C32.2644 9.5341 31.0356 9.27288 30.2225 9.10004ZM24.9477 14.362C25.6452 14.362 26.2127 14.9368 26.2127 15.6433C26.2127 16.3499 25.6452 16.9246 24.9477 16.9246C24.2504 16.9246 23.6831 16.3499 23.6831 15.6433C23.6831 14.9368 24.2504 14.362 24.9477 14.362ZM22.5814 8.90076V5.48808H24.2415C24.8795 5.48808 25.6665 5.97315 25.9587 6.54428L27.0445 8.77151C27.0675 8.81658 27.0914 8.85954 27.1161 8.90069H22.5814V8.90076ZM12.8577 15.6433C12.8577 16.3497 12.2902 16.9246 11.5926 16.9246C10.8953 16.9246 10.3281 16.3498 10.3281 15.6433C10.3281 14.9367 10.8953 14.3619 11.5926 14.3619C12.2902 14.362 12.8577 14.9368 12.8577 15.6433Z"
                fill="black"
              />
            </svg>
            <p>Fast Worldwide Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};
