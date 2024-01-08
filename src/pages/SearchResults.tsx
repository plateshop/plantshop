import React, { useState } from "react";
import {
  useLocation,
  RouteComponentProps,
  withRouter,
  useHistory,
  Link,
} from "react-router-dom";
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
  category: string;
}

interface SearchResultsProps extends RouteComponentProps {
  history: ReturnType<typeof useHistory>;
  location: ReturnType<typeof useLocation>;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = ({
  history,
  location,
  match,
}) => {
  const locationState = useLocation<{ results: YourResultType[] }>();
  const results = locationState.state?.results || [];
  const historyInstance = useHistory();
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
          {data.slice(i, i + 4).map((item) =>
            item && item.id ? (
              <div key={item.id} className="search-result-item">
                <>
                  <img src={item.img} alt={item.title} />
                  <h4>{item.title && item.title.toLowerCase()}</h4>
                  <p>{item.price && item.price.toLowerCase()}</p>
                </>
              </div>
            ) : null
          )}
        </div>
      );
    }
    return rows;
  };

  const handleProductClick = (productId: number, category: string) => {
    const categoryToDetailPage: Record<string, string> = {
      Bowls: "bowlsdetail",
      Cup: "cupdetail", // 수정된 부분
      Kitchenware: "kitchenwaredetail",
      Plate: "platesdetail", // 수정된 부분
      // 필요한 만큼 더 많은 카테고리를 추가하세요.
    };

    const formattedCategory = category.replace(/\s+/g, "").toLowerCase(); // 수정된 부분
    const detailPagePath = categoryToDetailPage[formattedCategory];

    if (detailPagePath) {
      history.push(`/${detailPagePath}/${productId}`);
    } else {
      console.error(`디테일 페이지를 찾을 수 없음: ${category}`);
    }
  };

  // URL에 검색어를 반영하기 위한 useEffect
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      const search = location.search.replace("?search=", ""); // search 쿼리 파라미터에서 검색어 추출
      setSearchInput(search);
    });

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => unlisten();
  }, [history, location.search]);

  return (
    <div>
      <Navbar
        history={history}
        location={location}
        match={match}
        isLoggedIn={false}
        userName={""}
        onLogout={() => {}}
      />
      <div className="search-results">
        <li
          className={`menu-search ${isSearchVisible ? "click" : ""}`}
          onClick={handleSearchContainerClick}
        >
          {searchInput && isSearchVisible && (
            <>
              {renderSearchResults(
                Bowlsdata.filter(
                  (bowl: BowlsDataType) =>
                    bowl.title &&
                    typeof bowl.title === "string" &&
                    bowl.title.toLowerCase().includes(searchInput.toLowerCase())
                )
              )}

              {renderSearchResults(
                Cupdata.filter(
                  (cup: CupDataType) =>
                    cup.title &&
                    typeof cup.title === "string" &&
                    cup.title.toLowerCase().includes(searchInput.toLowerCase())
                )
              )}

              {renderSearchResults(
                Kitchenwaredata.filter(
                  (Kitchenware: KitchenwareDataType) =>
                    Kitchenware.title &&
                    typeof Kitchenware.title === "string" &&
                    Kitchenware.title
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                )
              )}

              {renderSearchResults(
                Platesdata.filter(
                  (plates: PlatesDataType) =>
                    plates.title &&
                    typeof plates.title === "string" &&
                    plates.title
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                )
              )}
            </>
          )}
        </li>
        <h2>검색 결과</h2>
        <div className="search-results-box">
          {results.map((result) => (
            <Link
              key={result.id}
              to={`/${result.category.toLowerCase()}detail/${result.id}`}
              className="search-result-item"
            >
              {result && ( // 추가 부분: result가 존재하는 경우에만 렌더링
                <>
                  <img src={result.img} alt={result.title} />
                  <h4>{result.title}</h4>
                  <p>{result.price}</p>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchResults);
