import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'

const MenuScreen = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='MENU' text='Please See Menu Below'/>
      <Menu />
      <Footer />
    </div>
  )
}

export default MenuScreen