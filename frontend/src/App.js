import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Order from './routes/Order/Order';
import Home from './routes/Home/Home';
import Flavors from './routes/Flavors/Flavors';
import MenuScreen from './routes/Menu/Menu';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import BananasFoster from './components/IceCreamFlavors/BananasFoster';
import VeganPeanutButterOreo from './components/IceCreamFlavors/VeganPeanutButterOreo';
import StrawberryNillaCheesecake from './components/IceCreamFlavors/StrawberryNillaCheesecake';
import NutellaBanana from './components/IceCreamFlavors/NutellaBanana';
import MintAndChip from './components/IceCreamFlavors/MintAndChip';
import MatchaMochi from './components/IceCreamFlavors/MatchaMochi';
import Mango from './components/IceCreamFlavors/Mango';
import LavendarAndHoney from './components/IceCreamFlavors/LavendarAndHoney';
import GrandMarnier from './components/IceCreamFlavors/GrandMarnier';
import FlufferNutter from './components/IceCreamFlavors/FlufferNutter';
import DeathByChocolate from './components/IceCreamFlavors/DeathByChocolate';
import CookieButter from './components/IceCreamFlavors/CookieButter';
import ChunkyChocolateChipCherry from './components/IceCreamFlavors/ChunkyChocolateChipCherry';
import CampFirePie from './components/IceCreamFlavors/CampfirePie';
import BourbonCaramelCrunch from './components/IceCreamFlavors/BourbonCaramelCrunch';
import BirthdayCake from './components/IceCreamFlavors/BirthdayCake';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<MenuScreen />} />
          <Route path='/flavors' element={<Flavors />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<Order />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bananasfoster' element={<BananasFoster/>}/>
          <Route path='/birthdaycake' element={<BirthdayCake/>}/>
          <Route path='/bourboncaramelcrunch' element={<BourbonCaramelCrunch/>}/>
          <Route path='/campfirepie' element={<CampFirePie/>}/>
          <Route path='/chunkychocolatechipcherry' element={<ChunkyChocolateChipCherry/>}/>
          <Route path='/cookiebutter' element={<CookieButter/>}/>
          <Route path='/deathbychocolate' element={<DeathByChocolate/>}/>
          <Route path='/fluffernutter' element={<FlufferNutter/>}/>
          <Route path='/grandmarnier' element={<GrandMarnier/>}/>
          <Route path='/lavendarandhoney' element={<LavendarAndHoney/>}/>
          <Route path='/mango' element={<Mango/>}/>
          <Route path='/matchamochi' element={<MatchaMochi/>}/>
          <Route path='/mintandchip' element={<MintAndChip/>}/>
          <Route path='/nutellabanana' element={<NutellaBanana/>}/>
          <Route path='/strawberrynillacheesecake' element={<StrawberryNillaCheesecake/>}/>
          <Route path='/veganpeanutbutteroreo' element={<VeganPeanutButterOreo/>}/>
      </Routes>
    </>
  );
}

export default App;
