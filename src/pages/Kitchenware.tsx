import React, { useState } from "react";
import "../styles/Kitchenware.css";
import Kitchenwaredata from "../Data/Kitchenwaredata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import KitchenwareImage from "../img/list/kitchenware.jpg";

interface Kitchenwaredata {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Kitchenware: React.FC = () => {
  const [Kitchenware] = useState<Kitchenwaredata[]>(Kitchenwaredata);

  return (
    <div>
      <Navbar />
      <div className="list-img-box">
        <div className="list-img">
          <img src={KitchenwareImage} alt="Kitchenware" />
          <div className="list-img-text">
            <div className="left-text-header">
              <h1>Kitchenware</h1>
              <div className="left-text-description">
                <p>Dress up your tasting room.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cup">
        {Kitchenware.map((KitchenwareItem) => (
          <Card key={KitchenwareItem.id} Kitchenware={KitchenwareItem} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

interface CardProps {
  Kitchenware: Kitchenwaredata;
}

function Card({ Kitchenware }: CardProps) {
  return (
    <div className="card">
      <img src={Kitchenware.img} alt={Kitchenware.title} />
      <h4>{Kitchenware.title}</h4>
      <p>{Kitchenware.price}</p>
    </div>
  );
}

export default Kitchenware;
