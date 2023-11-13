import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Kitchenware.css';
import Kitchenwaredata from '../Data/KitchenwareData';
import Footer from '../components/Footer';
import  Navbar  from '../components/Navbar';
import KitchenwareImage from '../img/list/kitchenware.jpg';

interface Kitchenwaredata {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
}

const Kitchenware: React.FC = () => {
  const [kitchenwareData] = useState<Kitchenwaredata[]>(Kitchenwaredata);

  return (
    <div>
      <Navbar />
      <div className='list-img-box'>
        <div className='list-img'>
          <img src={KitchenwareImage}  alt='Kitchenware' />
          <div className='list-img-text'>
            <div className='left-text-header'>
              <h1>Kitchenware</h1>
              <div className='left-text-description'>
                <p>Dress up your tasting room.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cup">
  {kitchenwareData.map((kitchenwareItem) => (
    <div key={kitchenwareItem.id} className="card">
      <img src={kitchenwareItem.img} alt={kitchenwareItem.title} />
      <h4>{kitchenwareItem.title}</h4>
      <p>{kitchenwareItem.price}</p>
      <Link to={`/kitchenwareDetail/${kitchenwareItem.id}`} className="custom-link">
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
    kitchenware: Kitchenwaredata;
}

function Card({ kitchenware }: CardProps) {
  return (
      <div className="card">
        <img src={kitchenware.img} alt={kitchenware.title} />
        <h4>{kitchenware.title}</h4>
        <p>{kitchenware.price}</p>
      </div>
  );
}

export default Kitchenware;