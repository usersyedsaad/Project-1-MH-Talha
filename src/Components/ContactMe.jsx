import React from 'react'
import Button from './Subcomponents/Icons/Button'

const ContactMe = () => {
  return (
    <div className='text-white  pt-[256px] flex flex-col items-center justify-between gap-[64px]'>
      
      <div className='lets-make-etc flex flex-col self-end gap-[24px] w-[76%]' >
        <h6 className='text-white font-[300] leading-normal tracking-[-2.24px] text-[56px] text-left '>Let’s Make Something <span className='text-[#01B7C3]'>Great Together</span>. Start a <span className='text-[#01B7C3]'>conversation</span> 👋</h6>
        <p className='text-[#A4A7AC] text-[24px] leading-normal tracking-[-0.48px]'>Get in touch if you want to discuss your project , learn more about my methodologies, or just to say hello!</p>
      <div className='social-links self-start pt-[64px] flex gap-[40px]'>
        <Button buttonTitle="HMTalha@gmail.com" style={{borderRadius: '32px', backgroundColor: '#01B7C3', color:'#1B2230'}}/>
        <span className='flex gap-[8px]'>
        <Button buttonTitle="Linkedin" style={{background: 'rgba(255, 255, 255, 0.10)', border: '1px solid rgba(255, 255, 255, 0.20)' ,borderRadius: '32px'}}/>
        <Button buttonTitle="Email" style={{background: 'rgba(255, 255, 255, 0.10)', border: '1px solid rgba(255, 255, 255, 0.20)', borderRadius: '32px'}}/>
        <Button buttonTitle="Whatsapp" style={{background: 'rgba(255, 255, 255, 0.10)', border: '1px solid rgba(255, 255, 255, 0.20)' ,borderRadius: '32px'}}/>
        </span>
      </div>
      </div>
      <div className='w-full'><hr className='bg-white h-[1px] w-full mt-[180px] mb-[40px]' style={{background: 'rgba(255, 255, 255, 0.20)'}}/></div>

    </div>
  )
}

export default ContactMe