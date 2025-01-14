import React from 'react';
import Button from './Subcomponents/Icons/Button';
import Icon from './Subcomponents/Icons/Icon';
import MarqueeCarousel from './Subcomponents/Icons/Carousel';
import LinkedinIcon from "../assets/svgs/LinkedinIcon.svg"
import TwitterIcon from "../assets/svgs/TwitterIcon.svg"
import InstagramIcon from "../assets/svgs/InstagramIcon.svg"
import WhatsappIcon from "../assets/svgs/WhatsappIcon.svg"

const About = () => {
  return (
    <div id='About' className="text-white  min-h-min flex flex-col justify-between items-center gap-y-40">
      {/* Main Content Section */}
      <div className="center-div flex flex-col items-center gap-14 w-full px-[10vw]  mt-40  ">
        {/* Introduction Section */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center leading-normal font-[300] text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-poppins -mb-1">
            Hi HM Talha here 👋
          </h1>
          <h2 className="text-center leading-normal tracking-[-2.24] font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-poppins">
            I Help Entrepreneurs with <span className="inline-block leading-normal">High-Quality</span>{' '}
            <span className="border-2 px-5 py-0 border-[#01B7C3] leading-normal rounded-full inline-block">
              Designs & Development
            </span> 
            Solutions that Generate ROI
          </h2>
        </div>

        {/* Social Links Section */}
        <div className="social-links mt-5 flex items-center justify-center gap-3">
          <Button buttonTitle="Get A Quote" />
          <div className="flex gap-1">
            <Icon imgUrl={LinkedinIcon }/>
            <Icon imgUrl={TwitterIcon} />
            <Icon imgUrl={WhatsappIcon} />
            <Icon imgUrl={InstagramIcon} />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full ">
        <MarqueeCarousel />
      </div>
    </div>
  );
};

export default About;
