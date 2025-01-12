import { useState } from "react";  // Importing useState for handling the responsive toggle
import Button from "./Icons/Button";
import Brand from "./Brand";

const NavBar = () => {
  // State to handle responsive toggle
  const [isResponsive, setIsResponsive] = useState(false);

  // Function to toggle responsive class
  const toggleNav = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className="flex items-center justify-between w-full h-auto m-3 ">
      <Brand />
      <div className={`min-w-[25%] topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <a href="#About" className="active">About me</a>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#resources">Resources</a>
        <a href="#contact">Contact</a>
        {/* Hamburger icon */}
        <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
          <i className=" fa fa-bars items-center justify-between mt-2"></i>
        </a>
        {/* Button inside the menu on smaller screens */}
        <div className={`sm:block ${isResponsive ? 'block' : 'hidden'} sm:hidden`}>
          <Button buttonTitle="Get A Quote" />
        </div>
      </div>
      {/* Button outside on larger screens */}
      <div className="hidden sm:block">
        <Button buttonTitle="Get A Quote" />
      </div>
    </div>
  );
};

export default NavBar;
