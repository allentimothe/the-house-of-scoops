import React from 'react';
import './IceCreamFlavors.css';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import veganPeanutButterOreo from '../../assets/tangerine-newt-ogqaFRY7hAc-unsplash.jpg'


const VeganPeanutButterOreo = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Vegan Peanut Butter Oreo' text=''/>
        <div className='flavor'>
          <div className='flavor-container'>
            <br />
              <div className='img-container'>
                <br />
                  <div className='img-flavor'>
                    <img src={veganPeanutButterOreo} className='img' alt='' />
                  </div>
                <br />
              </div>
            </div>
              <div className= 'flavor-description'>
                  <p>Creamy oat based goodness mixed with peanut butter and layered with oreo's.
                  </p>
             </div>
        </div>
      <Footer />
    </div>
  )
}

export default VeganPeanutButterOreo;