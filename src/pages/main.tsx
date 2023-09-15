import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import "../styles/Main.css";

import slide1 from "../img/slide/slide1.png";
import slide2 from "../img/slide/slide2.png";
import slide3 from "../img/slide/slide3.png";
import slide4 from "../img/slide/slide4.png";
import ex1 from "../img/slide/ex1.png";
import ex2 from "../img/slide/ex2.png";

const slides = [slide1, slide2, slide3, slide4, ex1, ex2];

const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="wrap">
      <Navbar />
      <div className="maininner">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(./assets/${slide})`,
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
