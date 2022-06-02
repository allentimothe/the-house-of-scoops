import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import OrderForm from '../../components/OrderForm/OrderForm'

const Order = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='ORDER' text='For Private Event Catering / Quote Requests, Please Fill Out The Form Below'/>
      <OrderForm />
      <Footer />
    </div>
  )
}

export default Order