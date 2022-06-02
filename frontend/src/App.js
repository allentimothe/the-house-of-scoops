import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Order from './routes/Order/Order';
import Home from './routes/Home/Home';
import Flavors from './routes/Flavors/Flavors';
import Dashboard from './routes/Menu/Menu';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Dashboard />} />
          <Route path='/flavors' element={<Flavors />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<Order />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
