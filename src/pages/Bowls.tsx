import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Kitchenware.css";
import Bowlsdata from "../Data/BowlsData";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bowlsImage from "../img/list/bowls3.jpg";

interface Bowlsdata {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
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
          <div key={bowlsItem.id} className="card">
            <img src={bowlsItem.img} alt={bowlsItem.title} />
            <h4>{bowlsItem.title}</h4>
            <p>{bowlsItem.price}</p>
            <Link to={`/BowlsDetail/${bowlsItem.id}`} className="custom-link">
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
  bowls: Bowlsdata;
}

function Card({ bowls }: CardProps) {
  const firstImageUrl = Array.isArray(bowls.img) ? bowls.img[0] : "";

  return (
    <div className="card">
      {firstImageUrl && <img src={firstImageUrl} alt={bowls.title} />}
      <h4>{bowls.title}</h4>
      <p>{bowls.price}</p>
    </div>
  );
}

export default Bowls;
