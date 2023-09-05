import React, { useState } from "react";
import "./App.css";

const SearchIcon: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="icon-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      🔍
      {showTooltip && <span className="tooltip">검색</span>}
    </div>
  );
};

const HeartIcon: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="icon-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      ❤️
      {showTooltip && <span className="tooltip">즐겨찾기</span>}
    </div>
  );
};

const LoveIcon: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="icon-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      💖
      {showTooltip && <span className="tooltip">마이페이지</span>}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <SearchIcon />
      <HeartIcon />
      <LoveIcon />
    </div>
  );
};

export default App;
