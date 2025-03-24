import React from "react";

export const Comparison = () => {
  const features = [
    "Guilt-Free Enjoyment",
    "Nothing Artificial",
    "60% Less Sugar & Calories",
    "Handcrafted In USA",
    "Vegan & Organic",
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 mt-8 sm:mt-12">
      <h1 className="text-2xl sm:text-4xl font-black text-center">
        ALPHAURA VS
      </h1>
      <h1 className="text-2xl sm:text-4xl font-black text-center mb-6 sm:mb-10">
        OTHERS
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Head */}
          <thead>
            <tr className=" text-xs sm:text-lg">
              <th className=""></th>
              <th className=" px-4 py-3 w-[200px]"></th>
              <th className=" px-4 py-3 text-center">Other Hair</th>
            </tr>
          </thead>

          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="text-xs sm:text-lg">
                <td
                  className={`border-b border-gray-300 px-4 py-3 font-semibold ${
                    features.length - 1 == index && "border-b-0"
                  }`}
                >
                  {feature}
                </td>

                {/* First SVG Column */}
                <td
                  className={`border-b border-[#2B1919] px-4 py-4 text-center bg-[#D13CA0] ${
                    index == 0 && "rounded-t-xl"
                  } ${
                    features.length - 1 == index && "rounded-b-xl border-b-0"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="32"
                      viewBox="0 0 31 32"
                      fill="none"
                    >
                      <path
                        d="M21.7727 12.6529L21.7722 12.6533L14.1673 20.2582L14.1673 20.2583L14.1619 20.2636L14.1601 20.2655C14.1188 20.307 14.0697 20.34 14.0156 20.3625C13.9615 20.385 13.9035 20.3965 13.8449 20.3965C13.7863 20.3965 13.7284 20.385 13.6743 20.3625L13.3299 21.1906L13.6743 20.3625C13.6202 20.34 13.5711 20.307 13.5298 20.2655L13.528 20.2637L13.5226 20.2583L9.72213 16.4578L9.71662 16.4523L9.71101 16.4469C9.66818 16.4055 9.63402 16.356 9.61052 16.3013C9.58702 16.2466 9.57465 16.1878 9.57413 16.1282C9.57361 16.0687 9.58496 16.0096 9.6075 15.9545C9.63005 15.8994 9.66335 15.8493 9.70545 15.8072L9.07127 15.1731L9.70546 15.8072C9.74756 15.7651 9.79763 15.7318 9.85274 15.7093C9.90785 15.6867 9.9669 15.6754 10.0264 15.6759C10.086 15.6764 10.1448 15.6888 10.1995 15.7123L10.5205 14.9651L10.1995 15.7123C10.2542 15.7358 10.3037 15.77 10.3451 15.8128L10.3506 15.8185L10.3562 15.8241L13.2109 18.6774L13.8451 19.3113L14.4791 18.6773L21.1383 12.0181L21.159 11.9974C21.2408 11.9256 21.3461 11.8857 21.4556 11.8858C21.5747 11.8859 21.6889 11.9333 21.7731 12.0176C21.8573 12.1019 21.9045 12.2162 21.9045 12.3353C21.9044 12.4545 21.857 12.5687 21.7727 12.6529ZM15.7472 30.4894C23.6726 30.4894 30.097 24.0649 30.097 16.1395C30.097 8.2141 23.6726 1.78966 15.7472 1.78966C7.82177 1.78966 1.39732 8.2141 1.39732 16.1395C1.39732 24.0649 7.82177 30.4894 15.7472 30.4894Z"
                        stroke="white"
                        stroke-width="1.79373"
                      />
                    </svg>
                  </div>
                </td>

                {/* Second SVG Column */}
                <td
                  className={`border-b border-gray-300 px-4 py-3 text-center ${
                    features.length - 1 == index && "border-b-0"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <path
                        d="M19.4272 10.7091L11.4081 18.7282M11.4081 10.7091L19.4272 18.7282M28.7828 14.7187C28.7828 22.1 22.799 28.0838 15.4176 28.0838C8.03627 28.0838 2.05249 22.1 2.05249 14.7187C2.05249 7.3373 8.03627 1.35352 15.4176 1.35352C22.799 1.35352 28.7828 7.3373 28.7828 14.7187Z"
                        stroke="black"
                        stroke-width="2.67303"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
