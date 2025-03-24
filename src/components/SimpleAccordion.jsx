import React, { useState } from 'react';

const SimpleAccordion = ({accordionItems}) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div className="w-full max-w-[433px] mx-auto p-4 space-y-2">
      
      {accordionItems.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left font-medium flex justify-between items-center bg-white hover:bg-gray-50"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 bg-white ${
              openItem === index ? 'max-h-96 p-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleAccordion;