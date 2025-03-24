import React from "react";
import Layer from "../../assets/Layer 1.png";
import Layer2 from "../../assets/Layer 2.png";
import Layer3 from "../../assets/Layer 3.png";
import Droper from "../../assets/Dropper 1.png";
import Bottle from "../../assets/Bottle 1.png";

export const Detail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-10">
      <div className="flex flex-col lg:text-left">
        <h1 className="text-[32px] lg:text-[40px] font-black">LOOK & FEEL</h1>
        <h1 className="text-[32px] lg:text-[40px] font-black">
          BEAUTIFUL AGAIN
        </h1>

        <div className="relative flex items-end justify-center lg:justify-start mt-6 transform -translate-y-4 lg:-translate-y-12">
          <img
            src={Bottle}
            alt=""
            className="h-[300px] lg:h-[458px] w-auto object-contain"
          />
          <img
            src={Droper}
            alt=""
            className="h-[200px] lg:h-[288px] w-auto object-contain absolute left-20 lg:left-56"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4">
        {[
          { img: Layer, title: "LOCKED-IN MOISTURE" },
          { img: Layer2, title: "Potent Antioxidants" },
          { img: Layer3, title: "REGROW LUCIOUS HAIR" },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 items-center lg:text-left">
            <img
              src={item.img}
              alt="layer"
              className="h-[50px] lg:h-[68px] w-[50px] lg:w-[68px]"
            />
            <div>
              <p className="text-[22px] lg:text-[36px] uppercase font-bold">
                {item.title}
              </p>
              <p className="text-[14px] lg:text-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
