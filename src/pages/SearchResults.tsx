// SearchResults.tsx

import React, { useState } from "react";
import { useLocation, RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../styles/SearchResults.css';
import Bowlsdata, { Bowlsdata as BowlsDataType } from '../Data/BowlsData';
import Cupdata, { Cupdata as CupDataType } from '../Data/CupData';
import Kitchenwaredata, {
  Kitchenwaredata as KitchenwareDataType,
} from '../Data/KitchenwareData';
import Platesdata, { Platesdata as PlatesDataType } from '../Data/PlatesData';

interface YourResultType {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
  category: string; // 상품 카테고리 추가
}

const SearchResults: React.FC<RouteComponentProps<{}>> = () => {
  const location = useLocation<{ results: YourResultType[] }>();
  const results = location.state?.results || [];
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchContainerClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const renderSearchResults = (data: any[]) => {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < data.length; i += 4) {
      rows.push(
        <div key={i} className="search-results-row">
          {data.slice(i, i + 4).map((item) => (
            <div key={item.id} className="search-result-item">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  const filteredBowls = Bowlsdata.filter((bowl: BowlsDataType) =>
    bowl.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredCups = Cupdata.filter((cup: CupDataType) =>
    cup.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredKitchenware = Kitchenwaredata.filter(
    (item: KitchenwareDataType) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredPlates = Platesdata.filter((plate: PlatesDataType) =>
    plate.title.toLowerCase().includes(searchInput.toLowerCase())
  );


  const handleProductClick = (productId: number, category: string) => {
    // 카테고리가 정의되었는지 확인하고, 정의되지 않았다면 빈 문자열로 대체
    const formattedCategory = category?.replace(/ /g, '') ?? '';
    
    // 클릭한 상품의 ID와 카테고리를 이용하여 해당 상품의 디테일 페이지로 이동
    const detailPageName = `${formattedCategory}Detail`;
    history.push(`/${detailPageName}/${productId}`);
  };

  return (
    <div>
      <Navbar history={undefined} location={undefined} match={undefined} isLoggedIn={false} userName={""} onLogout={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <div className='search-results'>
      <li
      className={`menu-search ${isSearchVisible ? "click" : ""}`}
      onClick={handleSearchContainerClick}
    >
      {/* 검색 입력과 버튼을 위한 기존 코드 */}
      {/* ... */}

      {/* 검색 결과를 표시합니다. */}
      {searchInput && isSearchVisible && (
        <>
          {renderSearchResults(filteredBowls)}
          {renderSearchResults(filteredCups)}
          {renderSearchResults(filteredKitchenware)}
          {renderSearchResults(filteredPlates)}
        </>
      )}
    </li>
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

export default withRouter(SearchResults);


















