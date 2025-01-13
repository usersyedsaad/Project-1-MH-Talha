import React from 'react'
import About from './About'
import Aboutme from './Aboutme'
import Work from './Work'

const Pages = () => {
  return (
    <div className='MainContent overflow-hidden'>
      <About/>
      <Aboutme/>
      <Work/>
    </div>
  )
}

export default Pages