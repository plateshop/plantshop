import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

interface YourResultType {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
  keywords: string[];
}

const SearchResults: React.FC = () => {
  const location = useLocation<{ results: YourResultType[] }>();
  const results = location.state?.results || [];
  const history = useHistory();

  return (
    <div>
      <h2>검색 결과</h2>
      {results.map((result) => (
        <div key={result.id}>
          <img src={result.img} alt={result.title} />
          <p>{result.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;








