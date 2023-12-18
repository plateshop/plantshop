// SearchResults.tsx

import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/SearchResults.css';

interface YourResultType {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
  category: string; // 상품 카테고리 추가
}

const SearchResults: React.FC = () => {
  const location = useLocation<{ results: YourResultType[] }>();
  const results = location.state?.results || [];
  const history = useHistory();

  const handleProductClick = (productId: number, category: string) => {
    // 카테고리가 정의되었는지 확인하고, 정의되지 않았다면 빈 문자열로 대체
    const formattedCategory = category?.replace(/ /g, '') ?? '';
    
    // 클릭한 상품의 ID와 카테고리를 이용하여 해당 상품의 디테일 페이지로 이동
    const detailPageName = `${formattedCategory}Detail`;
    history.push(`/${detailPageName}/${productId}`);
  };

  return (
    <div>
      <Navbar />
      <div className='search-results'>
        <h2>검색 결과</h2>
        <div className='search-results-box'>
          {results.map((result) => (
            <div key={result.id} className='search-result-item' onClick={() => handleProductClick(result.id, result.category)}>
              <img src={result.img} alt={result.title} />
              <h4>{result.title}</h4>
              <p>{result.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;


















