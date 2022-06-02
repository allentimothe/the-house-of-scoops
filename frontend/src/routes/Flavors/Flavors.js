import React from 'react'
import Footer from '../../components/Footer/Footer'
import FlavorItem from '../../components/FlavorItem/FlavorItem'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Punch = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='FLAVORS' text='Take a look at our selection of amazing flavors!'/>
      <FlavorItem />
      <Footer />
    </div>
  )
}

export default Punch