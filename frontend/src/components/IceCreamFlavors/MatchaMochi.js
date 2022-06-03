import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import matchaMochi from '../../assets/pexels-anastasia-belousova-3770058.jpg'


const MatchaMochi = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Matcha Mochi' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={matchaMochi} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Sweet Matcha ice cream with hints of vanilla and Mochi Balls.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default MatchaMochi;