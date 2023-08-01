import React, { useState } from "react";
import "../styles/Login.css";

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 로그인 API 호출 등의 로직을 추가 가능
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 API 호출 등의 로직을 추가 가능
    setIsLoggedIn(false);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h2>🍽 환영합니다 💖</h2>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <h2>로그인</h2>
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default Login;
