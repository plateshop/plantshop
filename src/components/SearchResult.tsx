import React from "react";
import "../styles/SearchResult.css";
interface SearchResultProps {
  onClose: () => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ onClose }) => {
  // 가상의 검색 결과 데이터
  const searchResults = [
    // 검색 결과 데이터 예시
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    // 추가적인 검색 결과 데이터를 여기에 추가
  ];

  return (
    <div className="search-result">
      <button onClick={onClose}>Close</button>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
