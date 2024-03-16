import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/Login.css";

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // 추가: 사용자 이름 상태

  const handleLogin = () => {
    const username = prompt("사용자 이름을 입력하세요:");
    if (username) {
      setIsLoggedIn(true);
      setUserName(username); // 사용자 이름 설정
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", username);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(""); // 사용자 이름 초기화
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userName");
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
      <div className="login-container">
        {isLoggedIn ? (
          <div>
            <h2>🍽 환영합니다 💖</h2>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <div className="login-header">
              <h2>로그인</h2>
            </div>
            <div className="input-group">
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
            </div>
            <div className="button-group">
              <button className="login" onClick={handleLogin}>
                로그인
              </button>
              <div className="joinus-mt">
                <h5>
                  아직 회원이 아니십니까?
                  <br />
                  회원가입을 하시고 다양한 혜택을 받아보세요.
                </h5>
              </div>
              <a href="/joinpage">
                <button className="joinus">Join us</button>
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;

