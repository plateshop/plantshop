import React, { useState } from 'react';
import '../styles/Kitchenware.css';
import Kitchenwaredata from '../Data/Kitchenwaredata';
import Footer from '../components/Footer';
// import { Navbar }  from '../components/Navbar';

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
      {/* <Navbar /> */}
      <div className='out'>
        <div className='kitchenware'>
        <div className="cup">
        {Kitchenware.map((KitchenwareItem) => (
          <Card key={KitchenwareItem.id} Kitchenware={KitchenwareItem} />
        ))}
      </div>
      <Footer />
      </div>
      </div>
    </div>
  );
};

interface CardProps {
    Kitchenware: Kitchenwaredata;
}

function Card({ Kitchenware }: CardProps) {
  return (
    <div>
      <div className="card">
        <img src={Kitchenware.img} width="175px" alt={Kitchenware.title} />
        <h4>{Kitchenware.title}</h4>
        <p>{Kitchenware.price}</p>
        </div>
    </div>
  );
}

export default Kitchenware;