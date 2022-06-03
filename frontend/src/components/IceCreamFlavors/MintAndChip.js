import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import mintAndChip from '../../assets/pexels-roman-odintsov-5060281.jpg'


const MintAndChip = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Mint and Chip' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={mintAndChip} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Creamy mint ice cream with chunks of andes mints, bringing a new spin on a classic flavor.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default MintAndChip;