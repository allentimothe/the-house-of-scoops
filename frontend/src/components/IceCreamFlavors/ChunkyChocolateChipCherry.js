import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import chunkyChocolateChipCherry from '../../assets/pexels-cheresha-1200034.jpg'


const ChunkyChocolateChipCherry = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Chunky Chocolate Chip Cherry' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={chunkyChocolateChipCherry} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Maraschino cherries mixed into our creamy ice cream base and loaded with chocolate chips and cherry chunks.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default ChunkyChocolateChipCherry;