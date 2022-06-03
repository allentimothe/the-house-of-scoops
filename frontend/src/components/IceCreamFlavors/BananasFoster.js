import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import bananasFoster from '../../assets/pexels-donald-tong-2205270.jpg'


const BananasFoster = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Bananas Foster' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={bananasFoster} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Fresh Bananas Foster mixed into our delicious ice cream base and complimented with a caramel ribbon.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default BananasFoster;