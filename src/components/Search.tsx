// import { useCallback, useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import SearchIcon from "../img/ui/search.png";
// import "../styles/Search.css";

// const Search: React.FC = () => {
//   const router = useRouter();
//   const [click, setClick] = useState<boolean>(false);
//   const [search, setSearch] = useState<string>("");

//   useEffect(() => {
//     try {
//       if (search) {
//         router.replace(
//           {
//             pathname: "/search",
//             query: {
//               search: search,
//               page: 1,
//             },
//           },
//           undefined,
//           { shallow: true }
//         );
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }, [search]);

//   const clickSearchImg = () => setClick(!click);

//   const handleSearchValue = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setSearch(e.target.value);
//     },
//     []
//   );

//   return (
    
//     <div className={`SearchContainer ${click ? "SearchContainerClick" : ""}`}>
//       <img
//         src={SearchIcon}
//         alt="Search"
//         onClick={clickSearchImg}
//         className="SerchIcon"
//         style={{ cursor: "pointer" }}
//       />

//       <input
//         type="text"
//         placeholder="제품, 이름"
//         autoFocus
//         autoComplete="off"
//         value={search}
//         onChange={handleSearchValue}
//         className="SearchInput"
//         style={{ cursor: "pointer", width: "12.5rem" }}
//       />
//     </div>
//   );
// };

// export default Search;


// 
// Search.tsx

import React from 'react';
import '../styles/Search.css'; // 스타일 파일 경로에 맞게 수정

const Search: React.FC = () => {
  return (
    <div className="SearchContainer">
      <input type="text" placeholder="상품을 검색하세요" />
    </div>
  );
};

export default Search;
