import React from 'react'
import About from './About'
import Aboutme from './Aboutme'
import Work from './Work'
import Services from './Services'
import Reviews from './Reviews'
import ContactMe from './ContactMe'
import Footer from './Footer'

const Pages = () => {
  return (
    <div className='Pages flex flex-col'>
      <About />
      <Aboutme />
      <Services />
      <Work />
      <Reviews/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Pages
