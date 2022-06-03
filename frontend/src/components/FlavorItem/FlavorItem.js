import React from 'react';
import './FlavorItem.css';
import { Link } from 'react-router-dom';
import veganPeanutButterOreo from '../../assets/tangerine-newt-ogqaFRY7hAc-unsplash.jpg';
import strawberryNillaCheesecake from '../../assets/pexels-lukas-1352282.jpg';
import nutellaBanana from '../../assets/NutellaCream-3.jpeg'
import mintAndChip from '../../assets/pexels-roman-odintsov-5060281.jpg';
import matchaMochi from '../../assets/pexels-anastasia-belousova-3770058.jpg';
import mango from '../../assets/pexels-julia-kuzenkov-1132348.jpg';
import lavendarAndHoney from '../../assets/pexels-kristina-paukshtite-1591242.jpg';
import grandMarnier from '../../assets/pexels-avichal-lodhi-2819088.jpg';
import flufferNutter from '../../assets/pexels-sebastian-coman-photography-3625371.jpg';
import deathByChocolate from '../../assets/pexels-layyana-sheridean-2846337.jpg';
import cookieButter from '../../assets/saher-suthriwala-xs32jGtAOv4-unsplash.jpg';
import chunkyChocolateChipCherry from '../../assets/pexels-cheresha-1200034.jpg';
import campFirePie from '../../assets/pexels-kristina-paukshtite-1146758.jpg';
import bourbonCaramelCrunch from '../../assets/pexels-nick-collins-1233462.jpg';
import birthdayCake from '../../assets/pexels-lisa-fotios-5861703.jpg';
import bananasFoster from '../../assets/pexels-donald-tong-2205270.jpg';


const FlavorItem = () => {
  return (
    <div className='flavoritem'>
      <div className='flavoritem-container'>
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/veganpeanutbutteroreo' className='linkto'>Vegan Peanut Butter Oreo</Link>
                    </div>
                  <img src={veganPeanutButterOreo} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/strawberrynillacheesecake' className='linkto'>Strawberry Nilla Cheesecake</Link>
                    </div>
                  <img src={strawberryNillaCheesecake} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/nutellabanana' className='linkto'>Nutella Banana</Link>
                    </div>
                  <img src={nutellaBanana} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/mintandchip' className='linkto'>Mint and Chip</Link>
                    </div>
                  <img src={mintAndChip} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/matchamochi' className='linkto'>Matcha Mochi</Link>
                    </div>
                  <img src={matchaMochi} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/mango' className='linkto'>Mango</Link>
                    </div>
                  <img src={mango} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/lavendarandhoney' className='linkto'>Lavendar and Honey</Link>
                    </div>
                  <img src={lavendarAndHoney} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/grandmarnier' className='linkto'>Grand Marnier</Link>
                    </div>
                  <img src={grandMarnier} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/flufferNutter' className='linkto'>Fluffer Nutter</Link>
                    </div>
                  <img src={flufferNutter} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/deathbychocolate' className='linkto'>Death by Chocolate</Link>
                    </div>
                  <img src={deathByChocolate} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/cookiebutter' className='linkto'>Cookie Butter</Link>
                    </div>
                  <img src={cookieButter} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                    <div className='linkDiv'>
                      <Link to='/chunkychocolatechipcherry' className='linkto'>Chunky Chocolate Chip Cherry</Link>
                    </div>
                  <img src={chunkyChocolateChipCherry} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                  <div className='linkDiv'>
                    <Link to='/campfirepie' className='linkto'>Camp Fire Pie</Link>
                  </div>
                  <img src={campFirePie} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                  <div className='linkDiv'>
                    <Link to='/bourboncaramelcrunch' className='linkto'>Bourbon Caramel Crunch</Link>
                  </div>
                  <img src={bourbonCaramelCrunch} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                  <div className='linkDiv'>
                    <Link to='/birthdaycake' className='linkto'>Birthday Cake</Link>
                  </div>
                  <img src={birthdayCake} className='img' alt='' />
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className='img-flavor'>
                  <div className='linkDiv'>
                    <Link to='/bananasfoster' className='linkto'>Bananas Foster</Link>
                  </div>
                  <img src={bananasFoster} className='img' alt='' />
                </div>
        </div>
    </div>
  )
}

export default FlavorItem;