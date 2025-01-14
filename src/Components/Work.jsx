import React from 'react'
import WorkCard from './Subcomponents/Icons/WorkCard.jsx'
import WorkImg1 from '../assets/imgs/WorkImg1.png'
import WorkImg2 from '../assets/imgs/WorkImg2.png'
import WorkImg3 from '../assets/imgs/WorkImg3.png'
import WorkImg4 from '../assets/imgs/WorkImg4.png'

const Work = () => {
  return (
    <div id='Work' className='text-white w-full ml-auto mr-auto flex flex-col gap-8 mt-22 min-h-screen px-5'>
      <div className='flex justify-between items-center'>
        <h4 className='text-xl md:text-5xl lg:text-[56px] font-[300] leading-normal tracking-[-2.24px]'>
          My Work
        </h4>
        <p className='text-sm md:text-xl lg:text-2xl font-[300] leading-normal tracking-[-0.96px]'>
          A piece from my selection of favorites
        </p>
      </div>
      <div className='work-cards w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10'>
        <WorkCard imgURL={WorkImg1} />
        <WorkCard imgURL={WorkImg2} />
        <WorkCard imgURL={WorkImg3} />
        <WorkCard imgURL={WorkImg4} />
      </div>
    </div>
  )
}

export default Work
