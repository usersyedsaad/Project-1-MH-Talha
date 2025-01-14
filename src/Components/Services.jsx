import React from 'react'
import Card from './Subcomponents/Icons/Card'

const Services = () => {
  return (
    <div id='Services' className='text-white  h-auto  w-fit flex flex-col gap-20 px-5 pt-44 mb-44'>
      <h3 className='tracking-[-2.24px] font-light leading-normal text-5xl'>I can help you with ...</h3>
      <div className='h-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-y-[9.6%] gap-x-[2.5%]'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Services