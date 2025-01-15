import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'


function RootLayout() {
  return (
    <div>
        <div><Navbar/></div>
        <main><Outlet/></main>
        <div><Footer/></div>

    </div>
  )
}

export default RootLayout