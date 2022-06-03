import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import mango from '../../assets/pexels-julia-kuzenkov-1132348.jpg'


const Mango = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Mango' text='Non-Dairy'/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={mango} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Fresh Mangoes made into a deliciously light and refreshing sorbet.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default Mango;