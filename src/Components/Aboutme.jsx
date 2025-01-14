import React from 'react'
import Button from './Subcomponents/Icons/Button'
import CircleIcon from './Subcomponents/Icons/CircleIcon'
import Sassac from '../assets/imgs/Sassac1.png'
const Aboutme = () => {
  return (
    <div id='About' className='h-auto w-full overflow-hidden text-white  flex flex-col items-center justify-between gap-44'>
      <h2 className='text-2xl md:text-3xl lg:text-5xl  text-center w-[73%] mt-40 h-auto'>I Collaborate with brands and agencies to create impactful results.</h2>
      <div className=' w-[85%] flex flex-col md:flex-row justify-start items-start gap-14 ml-[3%]'>
        
        <div ><CircleIcon imgURL={Sassac}/></div>
        <div className='aboutme gap-3 '>
          <h3 className='text-[#01B7C3] text-lg md:text-xl lg:text-3xl  font-light tracking-[-1.28px]'>About Me</h3>
          <p className=' text-lg md:text-xl lg:text-3xl  leading-normal font-light tracking-[-1.28px]'>I'm helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.</p>
          <Button buttonTitle="Book A Discovery Call " style={{marginTop: "12px"}}/>
        </div>
      </div>
      <div className=' flex  mr-[1%]  w-full justify-center '>
        <div className='w-[85%] ml-[3%] gap-x-14'>
        <h3 className='text-2xl md:text-3xl lg:text-5xl xl:text-5xl leading-normal md:w-[65.4%] font-light md:tracking-[-2.24px] h-auto mr- md:ml-[210px] lg:ml-[240px] '>I take a critical approach, applying the results of my explorations to create collisions of insight, inspiration and experimentation, for you</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Aboutme;