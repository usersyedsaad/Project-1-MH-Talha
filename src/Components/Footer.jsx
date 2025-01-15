import React from 'react';

import ArrowButton from './Subcomponents/Icons/ArrowButton';

const Footer = () => {

  const handleScrollToHome = () => {
    const homeSection = document.getElementById('Home');
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start', // Align to top of the viewport
      });
    }
  };
  return (
    <footer className="text-white w-full py-6 px-4  flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Left Section */}
      <div className="text-center md:text-left text-xs md:text-sm lg:text-base xl:text-lg font-light">
        © 2022 MH TALHA. All rights reserved.
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-end items-center gap-4" onClick={handleScrollToHome}  >
        <p className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-gray-400 transition duration-300">
          Back to top
        </p>
        <ArrowButton

          size="60px"
          arrowScale={0.5} // Arrow is 50% of the button size
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #FFF',
            borderRadius: '50%',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
          }}
          hoverStyle={{
            transform: 'scale(1.1)',
            borderColor: '#01B7C3',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
