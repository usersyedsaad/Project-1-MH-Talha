import React from 'react'
import Button from './Subcomponents/Icons/Button'
import CircleIcon from './Subcomponents/Icons/CircleIcon'

const Aboutme = () => {
  return (
    <div className='h-auto w-auto overflow-hidden text-white  flex flex-col items-center justify-between gap-44'>
      <h2 className='text-5xl text-center w-[73%] mt-40 h-auto'>I Collaborate with brands and agencies to create impactful results.</h2>
      <div className=' w-[85%] flex flex-col sm:flex-row justify-start items-start gap-14 ml-[3%]'>
        
        <div ><CircleIcon/></div>
        <div className='aboutme gap-3 '>
          <h3 className='text-[#01B7C3] text-3xl font-light tracking-[-1.28px]'>About Me</h3>
          <p className='text-3xl leading-normal font-light tracking-[-1.28px]'>I'm helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.</p>
          <Button buttonTitle="Book A Discovery Call " style={{marginTop: "12px"}}/>
        </div>
      </div>
      <div className=' flex  w-full justify-end mb-44'>
        <h3 className='text-5xl leading-normal w-[65.4%] font-light tracking-[-2.24px] h-auto ml-[29%] mr-[5.56%]'>I take a critical approach, applying the results of my explorations to create collisions of insight, inspiration and experimentation, for you</h3>
        
      </div>
      
    </div>
  )
}

export default Aboutme;