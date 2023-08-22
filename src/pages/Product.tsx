import React from "react";

interface ProductProps {
  name: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ name, description }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Product;
