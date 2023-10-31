import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Main.css";
import middle1 from "../img/home/middle1.jpg";
import middle2 from "../img/home/middle2.jpg";
import middle3 from "../img/home/middle3.jpg";
import middle4 from "../img/home/middle4.jpg";
import middle5 from "../img/home/middle5.jpg";

import slide1 from "../img/slide/slide1.png";
import slide2 from "../img/slide/slide5.png";
import slide3 from "../img/slide/slide6.png";
import slide4 from "../img/slide/slide8.png";
import Footer from "../components/Footer";

const slides = [slide1, slide2, slide3, slide4];

const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoggedIN, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLogin = () => {
    const username = prompt("사용자 이름을 입력하세요:");
    if (username) {
      setIsLoggedIn(true);
      setUserName(username);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", username);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userName");
  };

  return (
    <div className="wrap">
      <Navbar
        isLoggedIn={isLoggedIN}
        userName={userName}
        onLogout={handleLogout}
      />
      <div className="maininner">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${slide})`,
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="main-middle-wrap">
        <div className="main-middle-section-wrap">
          <div className="main-middle-section-wrap-inner">
            <div className="main-middle-section-wrap-inner-r">
              <div className="main-middle-section-wrap-inner-box">
                <div className="main-middle-section-wrap-inner-r-img">
                  <a href="/cup">
                    <img src={middle1} alt="middle1" />
                  </a>
                </div>
                <div className="main-middle-section-wrap-inner-r-img">
                  <a href="/plates">
                    <img src={middle2} alt="middle2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="main-middle-section-wrap-inner-l">
              <div className="main-middle-section-wrap-inner-box">
                <div className="main-middle-section-wrap-inner-l-img">
                  <a href="/bowls">
                    <img src={middle3} alt="middle3" />
                  </a>
                </div>
                <div className="main-middle-section-wrap-inner-l-img">
                  <a href="/kitchenware">
                    <img src={middle4} alt="middle4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-section">
        <img src={middle5} alt="middle5" />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
