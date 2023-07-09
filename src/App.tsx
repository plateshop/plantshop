import React from 'react';
import './App.css';
import { useState } from 'react';
import   Cup   from './pages/Cup';
import Cart  from './pages/Cart';
import Payment  from './pages/Payment';
import Products  from './pages/Products';

import cupdata from './data'
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/cup" element={<Cup />} />
      <Route path="/payment" element={<Payment />}/>
      <Route path="/products" element={<Products />}/>
      <Route />
    </Routes>
    </div>
    
 
  );
}

export default App;