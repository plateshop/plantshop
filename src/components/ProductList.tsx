import React from 'react';
import Product from '../Product';

interface ProductListProps {
  products: { name: string; description: string }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} name={product.name} description={product.description} />
      ))}
    </div>
  );
};

export default ProductList;