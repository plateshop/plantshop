import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { Navbar } from "./components/navbar";
import Cart from "./pages/Cart";
// import Customer from "../pages/Customer";
// import Favorite from "../pages/Favorite";
// import Search from "../pages/Search";
import './App.css';
import   Cup   from './pages/Cup';
import Payment  from './pages/Payment';
import Products  from './pages/Products';
import Detail  from './pages/Detail';


import cupdata from './data'

//페이지 이동버튼<Link to="/detail">상세페이지</Link>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg">
                <Navbar />
              </div>
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/customer" element={<Customer />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/cup" element={<Cup />} />
        <Route path="/payment" element={<Payment />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/detail" element={<Detail  />}/>
       </Routes>
    </div>
  );
}

export default App;
