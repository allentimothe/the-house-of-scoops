import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import grandMarnier from '../../assets/pexels-avichal-lodhi-2819088.jpg'


const GrandMarnier = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Grand Marnier' text='21+'/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={grandMarnier} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Grand Marnier Liqueur mixed in with our creamy base accented with essence of orange.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default GrandMarnier;