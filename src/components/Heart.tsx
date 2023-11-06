import React from "react";
import styled from "styled-components";
import HeartImg from "../img/ui/fillfavorite.png";
import EmptyHeartImg from "../img/ui/favorite.png";

const Heart = styled.img`
  width: 35px;
  height: 35px;
`;

interface HeartButtonProps {
  like: boolean;
  onClick: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({ like, onClick }) => {
  return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
};

export default HeartButton;
