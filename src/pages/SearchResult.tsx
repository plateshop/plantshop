import React, { useState } from "react";
import { useLocation, RouteComponentProps, withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/SearchResults.css";
import Bowlsdata, { Bowlsdata as BowlsDataType } from "../Data/Bowlsdata";
import Cupdata, { Cupdata as CupDataType } from "../Data/Cupdata";
import Kitchenwaredata, {
  Kitchenwaredata as KitchenwareDataType,
} from "../Data/Kitchenwaredata";
import Platesdata, { Platesdata as PlatesDataType } from "../Data/Platesdata";

interface YourResultType {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
  category: string; // 상품 카테고리 추가
}

const SearchResult: React.FC = () => {
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

  return (
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
  );
};

const SearchResults: React.FC<RouteComponentProps> = ({ history }) => {
  const location = useLocation<{ results: YourResultType[] }>();
  const results = location.state?.results || [];

  const handleProductClick = (productId: number, category: string) => {
    const formattedCategory = category?.replace(/ /g, "") ?? "";
    const detailPageName = `${formattedCategory}Detail`;
    history.push(`/${detailPageName}/${productId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="search-results">
        <h2>검색 결과</h2>
        <div className="search-results-box">
          {results.map((result) => (
            <div
              key={result.id}
              className="search-result-item"
              onClick={() => handleProductClick(result.id, result.category)}
            >
              <img src={result.img} alt={result.title} />
              <h4>{result.title}</h4>
              <p>{result.price}</p>
            </div>
          ))}
        </div>
        <SearchResult />
      </div>
    </div>
  );
};

export default withRouter(SearchResults);
