import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Kitchenware.css';
import Cupdata  from '../Data/CupData';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import cupImage from '../img/list/cup.jpg';

interface Cupdata  {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
}

const Cup: React.FC = () => {
  const [cupData] = useState<Cupdata []>(Cupdata );

  return (
    <div>
      <Navbar />
      <div className='list-img-box'>
        <div className='list-img'>
          <img src={cupImage} alt='cupImage' />
          <div className='list-img-text'>
            <div className='left-text-header'>
              <h1>Cup</h1>
              <div className='left-text-description'>
                <p>Keep it cool (or hot).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cup">
        {cupData.map((cupItem) => (
          <div key={cupItem.id} className="card">
            <img src={cupItem.img} alt={cupItem.title} />
      <h4>{cupItem.title}</h4>
      <p>{cupItem.price}</p>
      <Link to={`/CupDetail/${cupItem.id}`} className="custom-link">
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
  cup: Cupdata;
}

function Card({ cup }: CardProps) {
  const firstImageUrl = Array.isArray(cup.img) ? cup.img[0] : '';

  return (
    <div className="card">
      {firstImageUrl && <img src={firstImageUrl} alt={cup.title} />}
      <h4>{cup.title}</h4>
      <p>{cup.price}</p>
    </div>
  );
}

export default Cup;