import React from 'react'
import Button from './Subcomponents/Icons/Button'
import ArrowButton from './Subcomponents/Icons/ArrowButton'
const Footer = () => {
  return (
    <footer className='text-white  w-full h-auto flex justify-between items-center'>
      <div className='text-white text-xs lg:text-base xl:text-lg font-[300] leading-normal '>© 2022 MH TALHA. All right reserved.</div>
      <div className='flex justify-between items-center w-[217px]'>
        <p className='text-sm md:text-base lg:text-lg'>Back to top</p>
        <ArrowButton
        size="60px"
        arrowScale={0.5} // Arrow is 50% of the button size
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #FFF',
          borderRadius: '50%', // Optional radius
        }}
      />
      </div>
    </footer>
  )
}

export default Footer