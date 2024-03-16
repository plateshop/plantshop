// SearchComponent.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchCupData } from '../Data/CupData';
import { searchBowlsData } from '../Data/BowlsData';

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = () => {
    // CupData와 BowlsData에서 검색을 수행하고 결과를 합칩니다.
    const cupResults = searchCupData(query);
    const bowlsResults = searchBowlsData(query);
    const combinedResults = [...cupResults, ...bowlsResults];

    setSearchResults(combinedResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="상품을 검색하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
