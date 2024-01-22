import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Kitchenware.css";
import Platesdata from "../Data/Platesdata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import platesImage from "../img/list/plates.jpg";

interface Platesdata {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
}

const Plates: React.FC = () => {
  const [platesData] = useState<Platesdata[]>(Platesdata);

  return (
    <div>
      <Navbar />
      <div className="list-img-box">
        <div className="list-img">
          <img src={platesImage} alt="Kitchenware" />
          <div className="list-img-text">
            <div className="left-text-header">
              <h1>Plates</h1>
              <div className="left-text-description">
                <p>Find your favorite canvas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cup">
        {platesData.map((platesItem) => (
          <div key={platesItem.id} className="card">
            <img src={platesItem.img} alt={platesItem.title} />
            <h4>{platesItem.title}</h4>
            <p>{platesItem.price}</p>
            <Link to={`/BowlsDetail/${platesItem.id}`} className="custom-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

interface CardProps {
  plates: Platesdata;
}

function Card({ plates }: CardProps) {
  return (
    <div className="card">
      <img src={plates.img} width="175px" alt={plates.title} />
      <h4>{plates.title}</h4>
      <p>{plates.price}</p>
    </div>
  );
}

export default Plates;
