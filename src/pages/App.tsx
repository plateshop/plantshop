import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { Navbar } from "../components/navbar";
import Cart from "../pages/Cart";
import Customer from "../pages/Customer";
import Favorite from "../pages/Favorite";
import Search from "../pages/Search";

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
        <Route path="/customer" element={<Customer />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
