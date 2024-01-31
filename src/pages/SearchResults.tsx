import React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import { Location } from "history";
import "../styles/SearchResults.css";
import Navbar from "../components/Navbar";
import { ProductData } from "../components/Navbar";
import Footer from "../components/Footer";

interface SearchResultsProps extends RouteComponentProps<any> {
  location: {
    state: {
      results: ProductData[];
    };
  } & Location; // Location 타입 추가
}

const SearchResults: React.FC<SearchResultsProps> = ({ location, history }) => {
  const { results } = location.state;

  const handleProductClick = (product: ProductData) => {
    // 검색 결과를 클릭하면 해당 상품이 속한 데이터의 타입을 확인하고 이동
    switch (product.type) {
      case "Cup":
        history.push(`/Detail/Cup/${product.id}`);
        break;
      case "Bowls":
        history.push(`/Detail/Bowls/${product.id}`);
        break;
      case "Plates":
        history.push(`/Detail/Plates/${product.id}`);
        break;
      case "Kitchenware":
        history.push(`/Detail/Kitchenware/${product.id}`);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="search-results-container">
        <h2>검색 결과</h2>
        {results && results.length > 0 ? (
          <div className="search-results">
            {results.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => handleProductClick(product)}
              >
                <img src={product.img} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <Link to={`/Detail/${product.type}/${product.id}`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
      <div style={{ marginBottom: "50px" }}></div>{" "}
      {/* 풋터와 검색 결과 사이에 여백 */}
      <Footer />
    </div>
  );
};

export default withRouter(SearchResults);
