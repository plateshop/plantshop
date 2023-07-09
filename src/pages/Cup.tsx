import React, { useState } from 'react';
import '../styles/Cup.css';
import cupdata from '../data';
import Footer from '../components/Footer';

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
    <div>
      <div className="card">
        <img src={cup.img} width="175px" alt={cup.title} />
        <h4>{cup.title}</h4>
        <p>{cup.price}</p>
      </div>
    </div>
  );
}

export default Cup;

