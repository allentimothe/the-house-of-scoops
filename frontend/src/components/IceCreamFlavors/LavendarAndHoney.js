import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import lavendarAndHoney from '../../assets/pexels-kristina-paukshtite-1591242.jpg'


const LavendarAndHoney = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Lavendar and Honey' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={lavendarAndHoney} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Fresh lavendar and sourced honey joined together to make a sweet floral ice cream.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default LavendarAndHoney;