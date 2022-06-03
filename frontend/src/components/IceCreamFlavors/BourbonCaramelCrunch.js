import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import bourbonCaramelCrunch from '../../assets/pexels-nick-collins-1233462.jpg'


const BourbonCaramelCrunch = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Bourbon Caramel Crunch' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={bourbonCaramelCrunch} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Sweet caramel bourbon ice cream. Loaded with chunks of heath bars and caramel ribbon drizzled in.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default BourbonCaramelCrunch;