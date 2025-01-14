import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        className="bg-[#01B7C3] py-3 px-6 rounded-full text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex items-center gap-2"
        style={props.style}
      >
        {props.buttonTitle}
        {props.imgURL && (
          <img
            src={props.imgURL}
            alt={props.imgALT}
            
            style={{ flexShrink: 0 }} // Prevent resizing or stretching
          />
        )}
      </button>
    </div>
  );
};

Button.defaultProps = {
  buttonTitle: 'Button',
  imgURL: null,
  imgALT: 'Button Image',
};

export default Button;
