import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import birthdayCake from '../../assets/pexels-lisa-fotios-5861703.jpg'


const BirthdayCake = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Birthday Cakse' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={birthdayCake} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Vanilla ice cream with chunks of Brithday Cake.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default BirthdayCake;