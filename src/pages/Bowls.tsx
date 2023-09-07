import React, { useState } from "react";
import "../styles/Cup.css";
import Bowlsdata from "../Data/Bowlsdata";
import Footer from "../components/Footer";
import { Navbar } from "../components/navbar";

interface Bowlsdata {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Bowls: React.FC = () => {
  const [cup] = useState<Bowlsdata[]>(Bowlsdata);

  return (
    <div>
      <Navbar />
      <div className="cup">
        {cup.map((cupItem) => (
          <Card key={cupItem.id} bowls={cupItem} />
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
    <div>
      <div className="card">
        <img src={bowls.img} width="175px" alt={bowls.title} />
        <h4>{bowls.title}</h4>
        <p>{bowls.price}</p>
      </div>
    </div>
  );
}

export default Bowls;
