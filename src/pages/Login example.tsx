import React from "react";
import "../styles/Login example.css";
import Login from "./Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>로그인 예제</h1>
        <Login />
      </header>
    </div>
  );
};

export default App;
