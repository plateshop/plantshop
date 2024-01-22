import React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import { Location } from "history";

// ProductData 타입을 임포트
import { ProductData } from "../components/Navbar";

interface SearchResultsProps extends RouteComponentProps<any> {
  location: {
    state: {
      results: ProductData[];
    };
  } & Location; // Location 타입 추가
}

const SearchResults: React.FC<SearchResultsProps> = ({ location, history }) => {
  const { results } = location.state;

  if (!results || results.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

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
      <h2>검색 결과</h2>
      <div className="search-results">
        {results.map((product) => (
          <div
            key={product.id}
            className="search-result-item"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
            {/* 클릭 시 해당 상품의 디테일 페이지로 이동 */}
            <Link to={`/Detail/${product.type}/${product.id}`}>상세 보기</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(SearchResults);
