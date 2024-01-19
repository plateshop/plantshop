// import React, { useState } from "react";
// import { useLocation, RouteComponentProps, withRouter, useHistory } from "react-router-dom";
// import Navbar from '../components/Navbar';
// import '../styles/SearchResults.css';
// import Bowlsdata, { Bowlsdata as BowlsDataType } from '../Data/BowlsData';
// import Cupdata, { Cupdata as CupDataType } from '../Data/CupData';
// import Kitchenwaredata, { Kitchenwaredata as KitchenwareDataType } from '../Data/KitchenwareData';
// import Platesdata, { Platesdata as PlatesDataType } from '../Data/PlatesData';

// interface YourResultType {
//   id: number;
//   img: string;
//   title: string;
//   price: string;
//   detail: string;
//   detailimg: string[];
//   keywords: string[];
// }

// interface SearchResultsProps extends RouteComponentProps {
//   history: ReturnType<typeof useHistory>;
//   location: ReturnType<typeof useLocation>;
// }

// interface ProductDataWithtitle extends YourResultType {
//   title: string;
// }

// const filterProductsBySearch = (data: YourResultType[], searchString: string) => {
//   // 각 데이터에 'title' 속성이 있어야 함
//   return data.filter(item => item.title.toLowerCase().includes(searchString.toLowerCase()));
// };

// const getCategoryForProduct = (product: YourResultType) => {
//   return product.title || ""; // 상품의 카테고리를 반환
// };

// const SearchResults: React.FunctionComponent<SearchResultsProps> = ({ history, location, match }) => {
//   const locationState = useLocation<{ results: YourResultType[] }>();
//   const results = locationState.state?.results || [];
//   const historyInstance = useHistory();
//   const [searchInput, setSearchInput] = useState("");
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   const renderSearchResults = (data: YourResultType[]) => {
//     const rows: JSX.Element[] = [];
//     for (let i = 0; i < data.length; i += 4) {
//       rows.push(
//         <div key={i} className="search-results-row">
//           {data.slice(i, i + 4).map((item) => (
//             <div key={item.id} className="search-result-item" onClick={() => handleProductClick(item)}>
//               <img src={item.img} alt={item.title} />
//               <p>{item.title}</p>
//               <p>{item.price}</p> {/* 상품 가격 추가 */}
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return rows;
//   };


//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };

//   const handleSearchContainerClick = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const categoryToDetailPage: Record<string, string> = {
//     Bowls: 'BowlsDetail',
//     Cups: 'CupDetail',
//     Kitchenware: 'KitchenwareDetail',
//     Plates: 'PlatesDetail',
//   };
  
//   const handleProductClick = (product: YourResultType) => {
//     const category = getCategoryForProduct(product);
//     const formattedCategory = category.replace(/ /g, '').toLowerCase();
//     const detailPageName = categoryToDetailPage[formattedCategory];
  
//     if (detailPageName) {
//       // 상품의 디테일 페이지로 이동
//       history.push(`/${detailPageName}/${product.id}`);
//     } else {
//       console.error(`디테일 페이지를 찾을 수 없음: ${category}`);
//     }
//   };
  
  
  
//   // URL에 검색어를 반영하기 위한 useEffect
//   React.useEffect(() => {
//     const unlisten = history.listen(() => {
//       const search = location.search.replace('?search=', ''); // search 쿼리 파라미터에서 검색어 추출
//       setSearchInput(search);
//     });

//     // 컴포넌트가 언마운트될 때 리스너 해제
//     return () => unlisten();
//   }, [history, location.search]);

//   return (
//     <div>
//       {/* <Navbar
//         history={history}
//         location={location}
//         match={match}
//         isLoggedIn={false}
//         userName={""}
//         onLogout={() => { }}
//       /> */}
//       <div className='search-results'>
//         <li
//           className={`menu-search ${isSearchVisible ? "click" : ""}`}
//           onClick={handleSearchContainerClick}
//         >
//           {searchInput && isSearchVisible && (
//             <>
//               {renderSearchResults(Bowlsdata)}
//               {renderSearchResults(Cupdata)}
//               {renderSearchResults(Platesdata)}
//               {renderSearchResults(Kitchenwaredata)}
//             </>
//           )}
//         </li>
//         <h2>검색 결과</h2>
//         <div className='search-results-box'>
//           {results.map((result) => (
//             <div
//               key={result.id}
//               className="search-result-item"
//               onClick={() => handleProductClick(result)}
//             >
//               {result && result.id && (
//                 <>
//                   {result.img && <img src={result.img} alt={result.title} />}
//                   {result.title && result.title.toLowerCase().includes(searchInput.toLowerCase()) && (
//                     <>
//                       <h4>{result.title}</h4>
//                       <p>{result.price}</p>
//                     </>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default withRouter(SearchResults);

// src/pages/SearchResults.tsx

// src/pages/SearchResults.tsx

import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Location } from 'history';


// ProductData 타입을 임포트
import { ProductData } from '../components/Navbar';

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
      case 'Cup':
        history.push(`/Detail/Cup/${product.id}`);
        break;
      case 'Bowls':
        history.push(`/Detail/Bowls/${product.id}`);
        break;
      case 'Plates':
        history.push(`/Detail/Plates/${product.id}`);
        break;
      case 'Kitchenware':
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
          <div key={product.id} className="search-result-item" onClick={() => handleProductClick(product)}>
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
