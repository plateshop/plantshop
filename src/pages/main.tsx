import "../styles/Main.css";
import React, { useState, useEffect } from "react";
import slide1 from "../img/slide/slide1.png";
import slide2 from "../img/slide/slide2.png";
import slide3 from "../img/slide/slide3.png";
import slide4 from "../img/slide/slide4.png";
import { Navbar } from "../components/navbar";

interface AppProps {
  title: string;
  sub: string;
}

function Main({ title, sub }: AppProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
      } else {
        setCurrentSlide((prevSlide) => ((prevSlide - 2 + 4) % 4) + 1);
      }
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="wrap">
      <div className="maininner">
        <Navbar />
        <div>{title}</div>
        <img
          src={
            currentSlide === 1
              ? slide1
              : currentSlide === 2
              ? slide2
              : currentSlide === 3
              ? slide3
              : slide4
          }
          alt={`Slide ${currentSlide}`}
        />
      </div>
    </div>
  );
}

export default Main;
