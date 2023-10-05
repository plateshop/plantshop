// 메인 화면 컴포넌트
// import React, { useState, useEffect } from "react";
// import { Navbar } from "../components/Navbar";
// import "../styles/Main.css";

// import slide1 from '../img/slide/slide1.png';
// import slide2 from '../img/slide/slide2.png';
// import slide3 from '../img/slide/slide3.png';
// import slide4 from '../img/slide/slide4.png';

// const slides = [slide1, slide2, slide3, slide4];

// const Main: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 8000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="wrap">  
//       <Navbar/>
//       <div className="maininner">
//         <div className="slider-container">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`slide ${index === currentIndex ? "active" : ""}`}
//               style={{
//                 backgroundImage: `url(${slide})`,
//                 transform: `translateX(-${currentIndex * 100}%)`,
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import  Navbar  from "../components/Navbar";
import "../styles/Main.css";

import slide1 from "../img/slide/slide1.png";
import slide2 from "../img/slide/slide2.png";
import slide3 from "../img/slide/slide3.png";
import slide4 from "../img/slide/slide4.png";

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
    </div>
  );
};

export default Main;



