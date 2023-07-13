import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.tsx";
import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import Detail from "./pages/Detail.tsx";
import List from "./pages/List.tsx";

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
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
