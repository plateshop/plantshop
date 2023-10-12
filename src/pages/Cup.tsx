import React, { useState } from 'react';
import '../styles/Cup.css';
import cupdata from '../Data/Cupdata';
import Footer from '../components/Footer';
// import { Navbar }  from '../components/Navbar';

interface CupData {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Cup: React.FC = () => {
  const [cup] = useState<CupData[]>(cupdata);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="cup">
        {cup.map((cupItem) => (
          <Card key={cupItem.id} cup={cupItem} />
        ))}
      </div>
      <Footer />
  </div> 
  );
};

interface CardProps {
  cup: CupData;
}

function Card({ cup }: CardProps) {
  return (
      <div className="card">
        <img src={cup.img} alt={cup.title} />
        <h4>{cup.title}</h4>
        <p>{cup.price}</p>
      </div>
  );
}

export default Cup;

