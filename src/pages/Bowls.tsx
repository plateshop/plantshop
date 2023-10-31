import React, { useState } from "react";
import "../styles/Bowls.css";
import Bowlsdata from "../Data/Bowlsdata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bowlsImage from "../img/list/bowls3.jpg";

interface Bowlsdata {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Bowls: React.FC = () => {
  const [bowlsData] = useState<Bowlsdata[]>(Bowlsdata);

  return (
    <div>
      <Navbar />
      <div className="list-img-box">
        <div className="list-img">
          <img src={bowlsImage} alt="Kitchenware" />
          <div className="list-img-text">
            <div className="left-text-header">
              <h1>Bowls</h1>
              <div className="left-text-description">
                <p>Fill life to the brim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cup">
        {bowlsData.map((bowlsItem) => (
          <Card key={bowlsItem.id} bowls={bowlsItem} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

interface CardProps {
  bowls: Bowlsdata;
}

function Card({ bowls }: CardProps) {
  return (
    <div className="card">
      <img src={bowls.img} alt={bowls.title} />
      <h4>{bowls.title}</h4>
      <p>{bowls.price}</p>
    </div>
  );
}

export default Bowls;
