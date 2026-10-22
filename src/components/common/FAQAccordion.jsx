import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
          >
            {/* Header / Question */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none transition-colors duration-150 hover:bg-gray-50/50"
            >
              <span className={`font-bold text-sm sm:text-base font-heading ${isOpen ? 'text-[#016698]' : 'text-gray-800'}`}>
                {faq.question}
              </span>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                isOpen 
                  ? 'border-[#016698]/30 bg-[#016698]/5 text-[#016698] rotate-180' 
                  : 'border-gray-200 bg-gray-50 text-gray-500'
              }`}>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </span>
            </button>

            {/* Answer / Body */}
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden`}
              style={{
                maxHeight: isOpen ? '250px' : '0px',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="p-5 pt-0 border-t border-gray-50 text-gray-600 text-xs sm:text-[0.92rem] leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
