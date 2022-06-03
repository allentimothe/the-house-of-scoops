import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import flufferNutter from '../../assets/pexels-sebastian-coman-photography-3625371.jpg'


const FlufferNutter = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Fluffer Nutter' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={flufferNutter} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Peanut Butter ice cream, with layers of crushed Nutter Butter Cookies and Marshmellow Fluff.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default FlufferNutter;