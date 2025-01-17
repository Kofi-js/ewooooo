import React from 'react'
import Hero from '../Section/Hero'
import Skills from '../Section/Skills'
import ShowWorkings from '../Section/ShowWorkings'
import Logos from '../Section/Logos'
import Testimonial from '../Section/Testimonial'

function Home() {
  return (
    <div>
        <Hero/>
        <Logos/>
        <Skills/>
        <ShowWorkings/>
        <Testimonial/>
    </div>
  )
}

export default Home