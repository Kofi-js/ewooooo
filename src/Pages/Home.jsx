import React from 'react'
import Hero from '../Section/Hero'
import Skills from '../Section/Skills'
import ShowWorkings from '../Section/ShowWorkings'
import Logos from '../Section/Logos'

function Home() {
  return (
    <div>
        <Hero/>
        <Logos/>
        <Skills/>
        <ShowWorkings/>
    </div>
  )
}

export default Home