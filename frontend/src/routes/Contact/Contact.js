import React from 'react'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='CONTACT' text="We'd love to hear from you"/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact