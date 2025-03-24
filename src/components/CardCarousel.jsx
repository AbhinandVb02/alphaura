import React, { useState, useRef } from "react";

export const CardCarousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < cards.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  const scrollToCard = (index) => {
    setActiveIndex(index);

    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth + 16;
      carouselRef.current.scrollLeft = cardWidth * index;
    }
  };
  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 pb-6 pt-2 px-1 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="carousel-card flex-shrink-0 w-[322px] lg:w-[386px] h-[245px] lg:h-[294px] bg-white shadow-sm overflow-hidden transition-transform hover:scale-105 flex items-center justify-center"
            >
              {card.imageUrl ? (
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-[231px] lg:w-[278px] h-[179px] lg:h-[215px] object-cover"
                />
              ) : (
                <img
                  src="/api/placeholder/400/200"
                  alt="Placeholder"
                  className="object-cover"
                />
              )}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Avocado Oil</h3>
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99572 11.2734C9.02879 11.2734 11.4874 8.8148 11.4874 5.78174C11.4874 2.74867 9.02879 0.290039 5.99572 0.290039C2.96266 0.290039 0.504028 2.74867 0.504028 5.78174C0.504028 8.8148 2.96266 11.2734 5.99572 11.2734ZM7.93759 3.83987C8.04071 3.7369 8.18051 3.67911 8.32624 3.67921C8.47197 3.67931 8.61169 3.7373 8.71466 3.84042C8.81764 3.94354 8.87543 4.08334 8.87533 4.22907C8.87522 4.3748 8.81723 4.51452 8.71412 4.6175L5.60966 7.72195L5.60746 7.72415C5.55658 7.77532 5.49608 7.81593 5.42945 7.84365C5.36282 7.87136 5.29136 7.88562 5.2192 7.88562C5.14703 7.88562 5.07558 7.87136 5.00895 7.84365C4.94232 7.81593 4.88182 7.77532 4.83094 7.72415L4.82874 7.72195L3.27734 6.17055C3.22488 6.11989 3.18305 6.05929 3.15427 5.99229C3.12548 5.92529 3.11033 5.85323 3.1097 5.78031C3.10907 5.70739 3.12296 5.63508 3.15057 5.56758C3.17819 5.50009 3.21897 5.43878 3.27053 5.38721C3.32209 5.33565 3.38341 5.29487 3.4509 5.26726C3.51839 5.23965 3.5907 5.22575 3.66362 5.22639C3.73654 5.22702 3.8086 5.24217 3.8756 5.27095C3.9426 5.29973 4.0032 5.34157 4.05386 5.39402L5.2192 6.55881L7.93759 3.84042V3.83987Z"
                      fill="#D13CA0"
                    />
                  </svg>
                  <p className="text-[11px] lg:text-[13px]">
                    A Chinese herb that has been used traditionally.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99572 11.2734C9.02879 11.2734 11.4874 8.8148 11.4874 5.78174C11.4874 2.74867 9.02879 0.290039 5.99572 0.290039C2.96266 0.290039 0.504028 2.74867 0.504028 5.78174C0.504028 8.8148 2.96266 11.2734 5.99572 11.2734ZM7.93759 3.83987C8.04071 3.7369 8.18051 3.67911 8.32624 3.67921C8.47197 3.67931 8.61169 3.7373 8.71466 3.84042C8.81764 3.94354 8.87543 4.08334 8.87533 4.22907C8.87522 4.3748 8.81723 4.51452 8.71412 4.6175L5.60966 7.72195L5.60746 7.72415C5.55658 7.77532 5.49608 7.81593 5.42945 7.84365C5.36282 7.87136 5.29136 7.88562 5.2192 7.88562C5.14703 7.88562 5.07558 7.87136 5.00895 7.84365C4.94232 7.81593 4.88182 7.77532 4.83094 7.72415L4.82874 7.72195L3.27734 6.17055C3.22488 6.11989 3.18305 6.05929 3.15427 5.99229C3.12548 5.92529 3.11033 5.85323 3.1097 5.78031C3.10907 5.70739 3.12296 5.63508 3.15057 5.56758C3.17819 5.50009 3.21897 5.43878 3.27053 5.38721C3.32209 5.33565 3.38341 5.29487 3.4509 5.26726C3.51839 5.23965 3.5907 5.22575 3.66362 5.22639C3.73654 5.22702 3.8086 5.24217 3.8756 5.27095C3.9426 5.29973 4.0032 5.34157 4.05386 5.39402L5.2192 6.55881L7.93759 3.84042V3.83987Z"
                      fill="#D13CA0"
                    />
                  </svg>
                  <p className="text-[11px] lg:text-[13px]">
                    It may help in reducing sleep latency (meaning you sleep
                    quicker)
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99572 11.2734C9.02879 11.2734 11.4874 8.8148 11.4874 5.78174C11.4874 2.74867 9.02879 0.290039 5.99572 0.290039C2.96266 0.290039 0.504028 2.74867 0.504028 5.78174C0.504028 8.8148 2.96266 11.2734 5.99572 11.2734ZM7.93759 3.83987C8.04071 3.7369 8.18051 3.67911 8.32624 3.67921C8.47197 3.67931 8.61169 3.7373 8.71466 3.84042C8.81764 3.94354 8.87543 4.08334 8.87533 4.22907C8.87522 4.3748 8.81723 4.51452 8.71412 4.6175L5.60966 7.72195L5.60746 7.72415C5.55658 7.77532 5.49608 7.81593 5.42945 7.84365C5.36282 7.87136 5.29136 7.88562 5.2192 7.88562C5.14703 7.88562 5.07558 7.87136 5.00895 7.84365C4.94232 7.81593 4.88182 7.77532 4.83094 7.72415L4.82874 7.72195L3.27734 6.17055C3.22488 6.11989 3.18305 6.05929 3.15427 5.99229C3.12548 5.92529 3.11033 5.85323 3.1097 5.78031C3.10907 5.70739 3.12296 5.63508 3.15057 5.56758C3.17819 5.50009 3.21897 5.43878 3.27053 5.38721C3.32209 5.33565 3.38341 5.29487 3.4509 5.26726C3.51839 5.23965 3.5907 5.22575 3.66362 5.22639C3.73654 5.22702 3.8086 5.24217 3.8756 5.27095C3.9426 5.29973 4.0032 5.34157 4.05386 5.39402L5.2192 6.55881L7.93759 3.84042V3.83987Z"
                      fill="#D13CA0"
                    />
                  </svg>
                  <p className="text-[11px] lg:text-[13px]">
                    It may help in reducing sleep latency
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute lg:hidden  left-0 p-2 z-10 focus:outline-none"
          onClick={scrollPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute lg:hidden right-0 p-2 z-10 focus:outline-none"
          onClick={scrollNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center my-4 gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-[#D13CA0]" : "bg-gray-300"
            }`}
            onClick={() => scrollToCard(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
