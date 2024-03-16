import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface BasketProps {
  initialItemCount: number;
}

const Basket: React.FC<BasketProps> = ({ initialItemCount }) => {
  const [itemCount, setItemCount] = useState(initialItemCount);

  const addToBasket = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div>
      <button onClick={addToBasket}>
        <FaShoppingCart />
        <span>{itemCount}</span>
      </button>
    </div>
  );
};

export default Basket;

