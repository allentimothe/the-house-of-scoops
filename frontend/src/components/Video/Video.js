import React from 'react';
import './Video.css';

import homeVideo from '../../assets/homevid.mp4'



const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={homeVideo} type='video/mp4'/>;
      </video>
    <div className='content'>
      <h1>Welcome To The House Of Scoops❕ 🍨</h1>
    </div>
    </div>
  )
}

export default Video