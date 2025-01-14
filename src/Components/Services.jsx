import React from 'react'
import Card from './Subcomponents/Icons/Card'

const Services = () => {
  return (
    <div className='text-white  min-h-min  w-full flex flex-col gap-20 px-5'>
      <h3 className='tracking-[-2.24px] font-light leading-normal text-5xl'>I can help you with ...</h3>
      <div className='min-h-min grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-y-[9.6%] gap-x-[2.5%]'>
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