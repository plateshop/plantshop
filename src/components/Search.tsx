import React, { useState } from "react";
import SearchResult from "../components/SearchResult";
import menu1 from "../img/ui/search.png";

const Search = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      {/* Your search component content here */}

      <button
        className={`menu-search ${isSearchVisible ? "click" : ""}`}
        onClick={toggleSearch}
      >
        Open Search
      </button>

      {isSearchVisible && <SearchResult onClose={toggleSearch} />}
    </div>
  );
};

export default Search;
