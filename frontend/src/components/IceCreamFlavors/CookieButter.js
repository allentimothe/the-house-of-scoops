import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import cookieButter from '../../assets/saher-suthriwala-xs32jGtAOv4-unsplash.jpg'


const CookieButter = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Cookie Butter' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={cookieButter} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Cookie Butter ice cream loaded with chunks of biscoff cookies.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default CookieButter;