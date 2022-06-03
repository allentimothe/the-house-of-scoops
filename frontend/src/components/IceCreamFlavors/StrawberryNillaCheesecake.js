import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import strawberryNillaCheesecake from '../../assets/pexels-lukas-1352282.jpg'


const StrawberryNillaCheesecake = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Strawberry Nilla Cheesecake' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={strawberryNillaCheesecake} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Cheesecake ice cream with fresh strawberries and crushed Nilla Wafers.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default StrawberryNillaCheesecake;