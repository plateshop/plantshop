import React, { useState } from "react";
import "./App.css";
import search from "../img/ui/search.png";
import favorite from "../img/ui/favorite.png";
import person from "../img/ui/person.png";

interface IconProps {
  src: string;
  tooltip: string;
}

const Icon: React.FC<IconProps> = ({ src, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="icon-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img src={src} alt="Icon" />
      {showTooltip && <span className="tooltip">{tooltip}</span>}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Icon src={search} tooltip="검색" />
      <Icon src={favorite} tooltip="즐겨찾기" />
      <Icon src={person} tooltip="마이페이지" />
    </div>
  );
};

export default App;
