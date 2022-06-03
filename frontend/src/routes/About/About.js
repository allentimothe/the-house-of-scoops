import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import AboutContent from '../../components/AboutContent/AboutContent'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='ABOUT US' text='In-House made ice cream made fresh everyday!'/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About