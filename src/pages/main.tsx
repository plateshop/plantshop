import '../styles/Main.css';
import React, { useState } from "react";
import slide1 from '../img/slide/slide1.png';
import slide2 from '../img/slide/slide2.png';
import slide3 from '../img/slide/slide3.png';
import slide4 from '../img/slide/slide4.png';

interface AppProps {
  title: string;
  sub: string;
}

function Main(props: AppProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleWheel = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
    } else {
      setCurrentSlide((prevSlide) => ((prevSlide - 2 + 4) % 4) + 1);
    }
  };

  return (
    <div className="wrap" onWheel={handleWheel}>
      <div className="maininner">
        <div>"메인"</div>
        <div className="slider">
          <div
            style={{
              backgroundImage: `url(${slide1})`,
              display: currentSlide === 1 ? 'block' : 'none',
            }}
            className="slide"
            id="slide1"
          ></div>
          <div
            style={{
              backgroundImage: `url(${slide2})`,
              display: currentSlide === 2 ? 'block' : 'none',
            }}
            className="slide"
            id="slide2"
          ></div>
          <div
            style={{
              backgroundImage: `url(${slide3})`,
              display: currentSlide === 3 ? 'block' : 'none',
            }}
            className="slide"
            id="slide3"
          ></div>
          <div
            style={{
              backgroundImage: `url(${slide4})`,
              display: currentSlide === 4 ? 'block' : 'none',
            }}
            className="slide"
            id="slide4"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Main;

