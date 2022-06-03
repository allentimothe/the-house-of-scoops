import React from 'react'
import Footer from '../../components/Footer/Footer'
import FlavorItem from '../../components/FlavorItem/FlavorItem'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Flavors = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='FLAVORS' text='Our Ice Cream is made In-House, daily. We use only the best ingredients from selected suppliers. Quality and Freshness is our recipe.'/>
      <FlavorItem />
      <Footer />
    </div>
  )
}

export default Flavors