import React from 'react';
import Button from './Subcomponents/Icons/Button';
import Icon from './Subcomponents/Icons/Icon';
import MarqueeCarousel from './Subcomponents/Icons/Carousel';

const About = () => {
  return (
    <div className="text-white  min-h-screen flex flex-col justify-between items-center mt-[11vh]">
      {/* Main Content Section */}
      <div className="center-div flex flex-col items-center gap-5 w-full px-[10vw] pt-[5%]">
        {/* Introduction Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-poppins -mb-1">
            Hi HM Talha here 👋
          </h1>
          <h2 className="text-center leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-poppins">
            I Help Entrepreneurs with <span className="inline-block">High-Quality</span>{' '}
            <span className="border-2 px-5 py-0 border-[#01B7C3] rounded-full inline-block">
              Designs & Development
            </span> 
            Solutions that Generate ROI
          </h2>
        </div>

        {/* Social Links Section */}
        <div className="social-links mt-5 flex items-center justify-center gap-3">
          <Button buttonTitle="Get A Quote" />
          <div className="flex gap-1">
            <Icon imgUrl="src/assets/svgs/LinkedinIcon.svg" />
            <Icon imgUrl="src/assets/svgs/TwitterIcon.svg" />
            <Icon imgUrl="src/assets/svgs/InstagramIcon.svg" />
            <Icon imgUrl="src/assets/svgs/WhatappIcon.svg" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full mt-auto mb-auto">
        <MarqueeCarousel />
      </div>
    </div>
  );
};

export default About;
