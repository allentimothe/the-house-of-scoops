import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import campFirePie from '../../assets/pexels-kristina-paukshtite-1146758.jpg'


const CampFirePie = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Camp Fire Pie' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={campFirePie} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Marshmellow ice cream with chocolate covered graham cracker crumble.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default CampFirePie;