import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-[#01B7C3] py-3 px-6 rounded-full text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl' style={props.style}>{props.buttonTitle}</button>
    </div>
  )
}

export default Button