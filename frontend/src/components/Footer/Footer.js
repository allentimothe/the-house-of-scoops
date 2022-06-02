import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>
          <div>
            <p> 
                1365 East Gladstone Street #200
                Glendora, CA 91740
            </p>
            <h4>Glendora, CA 91740</h4>
          </div>
          </div>
            <div className='phone'>
              <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>(909) 506-8077</h4>
            </div>
            <div className='email'>
              <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>Info@TheHouseOfScoops.com</h4>
            </div>
        </div>
          <div className='right'>
            <h4>About the Company</h4>
            <div className='social'>
              <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;