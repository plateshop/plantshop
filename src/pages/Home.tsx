import React, { useState, useEffect } from "react";
import "./Home.css"; // 슬라이더에 스타일을 추가하려면 CSS 파일을 생성 및 임포트하세요.

const images = ["slide1.png", "slide2.png", "slide3.png", "slide4.png"];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 다음 슬라이드로 이동
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 정리
    };
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Home;
