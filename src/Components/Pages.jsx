import React from 'react'
import About from './About'
import Aboutme from './Aboutme'
import Work from './Work'
import Services from './Services'
import Reviews from './Reviews'
import ContactMe from './ContactMe'
const Pages = () => {
  return (
    <div className='MainContent flex flex-col mt-16'>
      <About/>
      <Aboutme/>
      {/* <Services/> */}
      {/* <Work/> */}
      {/* <Reviews/> */}
      {/* <ContactMe/> */}
    </div>
  )
}

export default Pages