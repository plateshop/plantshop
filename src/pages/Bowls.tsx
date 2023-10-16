// import React, { useState } from 'react';
// import '../styles/Bowls.css';
// import Bowlsdata from '../Data/Bowlsdata';
// import Footer from '../components/Footer';
// // import  {Navbar}  from '../components/Navbar';

// interface Bowlsdata {
//   id: number;
//   img: string;
//   title: string;
//   price: string;
// }

// const Bowls: React.FC = () => {
//   const [cup] = useState<Bowlsdata[]>(Bowlsdata);

//   return (
//     <div>
//       {/* <Navbar /> */}
//     <div> 
//       <div className="cup">
//         {cup.map((cupItem) => (
//           <Card key={cupItem.id} bowls={cupItem} />
//         ))}
//       </div>
//     </div>   
//       <Footer />
//     </div>
//   );
// };

// interface CardProps {
//   bowls: Bowlsdata;
// }

// function Card({ bowls }: CardProps) {
//   return (
//     <div>
//       <div className="card">
//         <img src={bowls.img} width="175px" alt={bowls.title} />
//         <h4>{bowls.title}</h4>
//         <p>{bowls.price}</p>
//       </div>
//     </div>
//   );
// }

// export default Bowls;

import React, { useState } from 'react';
import '../styles/Bowls.css';
import Bowlsdata from '../Data/Bowlsdata';
import Footer from '../components/Footer';

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
      <div className='list-img-box'>
        <div className='list-img'>
          <img src='https://crowcanyonhome.com/wp-content/uploads/2023/04/Bowls-and-Basins.jpg
' alt='Kitchenware' />
          <div className='list-img-text'>
            <div className='left-text-header'>
              <h1>Bowls</h1>
              <div className='left-text-description'>
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

