import React, { useState } from "react";
import "../styles/Cup.css";
import Platesdata from "../Data/Platesdata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import platesImage from "../img/list/plates.jpg";

interface PlatesData {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Plates: React.FC = () => {
  const [Plates] = useState<PlatesData[]>(Platesdata);

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
        {Plates.map((PlatesItem) => (
          <Card key={PlatesItem.id} cup={PlatesItem} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

interface CardProps {
  cup: PlatesData;
}

function Card({ cup }: CardProps) {
  return (
    <div className="card">
      <img src={cup.img} width="175px" alt={cup.title} />
      <h4>{cup.title}</h4>
      <p>{cup.price}</p>
    </div>
  );
}

export default Plates;
