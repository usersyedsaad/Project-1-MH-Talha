import React from 'react'
import About from './About'
import Aboutme from './Aboutme'
import Work from './Work'
import Services from './Services'
import Reviews from './Reviews'
import ContactMe from './ContactMe'

const Pages = () => {
  return (
    <div className='Pages flex flex-col'>
      <About />
      <Aboutme />
      <Services />
      <Work />
      {/* <Reviews/> */}
      {/* <ContactMe/> */}
    </div>
  )
}

export default Pages
