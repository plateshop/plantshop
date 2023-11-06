import React from "react";
import HeartImg from "../img/ui/fillfavorite.png";
import EmptyHeartImg from "../img/ui/favorite.png";
import "../styles/Heart.css";

interface HeartProps {
  like: boolean;
  onClick: () => void;
}

const Heart: React.FC<HeartProps> = ({ like, onClick }) => {
  const imageSource = like ? HeartImg : EmptyHeartImg;

  return (
    <img
      className="heart-img"
      src={imageSource}
      alt="Heart"
      onClick={onClick}
    />
  );
};

export default Heart;
