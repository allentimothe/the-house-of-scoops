import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import nutellaBanana from '../../assets/NutellaCream-3.jpeg'


const NutellaBanana = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Nutella Banana' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={nutellaBanana} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Nutella and Fresh Bananas meet creamy ice cream, sprinkled with chocolate crisp pearls.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default NutellaBanana;