import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Kitchenware.css"; // Kitchenware.css -> Kitchenware.css로 수정
import CupData from "../Data/CupData"; // CupData -> Cupdata로 수정
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import cupImage from "../img/list/cup.jpg";
import "../pages/CupDetail";

interface CupData {
  id: number;
  img: string[];
  title: string;
  price: string;
  detail: string;
}

const Cup: React.FC = () => {
  const [cups] = useState<CupData[]>(CupData);

  return (
    <div>
      <Navbar />
      <div className="list-img-box">
        <div className="list-img">
          <img src={cupImage} alt="Kitchenware" />
          <div className="list-img-text">
            <div className="left-text-header">
              <h1>Cup</h1>
              <div className="left-text-description">
                <p>Keep it cool (or hot).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cup">
        {cups.map((cupItem) => (
          <Link key={cupItem.id} to={`/CupDetail/${cupItem.id}`}>
            <Card cup={cupItem} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

interface CardProps {
  cup: cups;
}

function Card({ cup }: CardProps) {
  const firstImageUrl = Array.isArray(cup.img) ? cup.img[0] : "";

  return (
    <div className="card">
      {firstImageUrl && <img src={firstImageUrl} alt={cup.title} />}
      <h4>{cup.title}</h4>
      <p>{cup.price}</p>
    </div>
  );
}

export default Cup;
