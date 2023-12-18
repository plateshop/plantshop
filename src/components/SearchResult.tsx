import React, { useState } from "react";
import Bowlsdata, { Bowlsdata as BowlsDataType } from "../Data/Bowlsdata";
import Cupdata, { Cupdata as CupDataType } from "../Data/Cupdata";
import Kitchenwaredata, {
  Kitchenwaredata as KitchenwareDataType,
} from "../Data/Kitchenwaredata";
import Platesdata, { Platesdata as PlatesDataType } from "../Data/Platesdata";

const SearchResult = () => {
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

  const filteredCups = Cupdata.filter((cup) =>
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
    <div className="right-menu">
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
    </div>
  );
};

export default SearchResult;
