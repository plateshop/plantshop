import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const mockProducts = [
  { name: "Product 1", description: "Description for Product 1" },
  { name: "Product 2", description: "Description for Product 2" },
  { name: "Product 3", description: "Description for Product 3" },
];

const App: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (query: string) => {
    const filtered = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="app">
      <h1>Shopping Mall</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
