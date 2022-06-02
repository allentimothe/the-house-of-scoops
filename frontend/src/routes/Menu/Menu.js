import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='MENU' text='Please See Menu Below'/>
      <Footer />
    </div>
  )
}

export default Menu