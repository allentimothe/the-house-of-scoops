import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import deathByChocolate from '../../assets/pexels-layyana-sheridean-2846337.jpg'


const DeathByChocolate = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Death By Chocolate' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={deathByChocolate} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Chocolate ice cream with chocolate cookies and a fudge ribbon.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default DeathByChocolate;