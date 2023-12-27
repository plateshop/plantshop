// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface FavoriteProps {
//   like: boolean;
//   onClick: () => void;
// }

// interface Content {
//   title: string;
//   text: string;
//   author: string;
// }

// const Favorite: React.FC<FavoriteProps> = (props) => {
//   const [like, setLike] = useState<boolean>(false);
//   const [content, setContent] = useState<Content | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//   //       const res = await axios.get(/* 요청 URL을 입력 /);
//   //       if (res.data.type === "liked") setLike(true);
//   //     } catch (error) {
//   //       console.error("데이터 가져오기 실패", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // const toggleLike = async () => {
//   //   try {
//   //     const res = await axios.post(/ POST 요청 URL을 입력 /);
//   //     setLike((prevLike) => !prevLike);
//   //   } catch (error) {
//   //     console.error("좋아요 토글 실패", error);
//   //   }
//   // };

//   // return (
//   //   <>
//   //     <Favorite like={like} onClick={toggleLike} />
//   //     {/ content를 Detail 컴포넌트에 전달 */}
//       <Detail content={content} />
//     </>
//   );
// };

// export default Favorite;
import React from 'react';

interface MyPickProps {
  products: Cupdata[];
}

interface Cupdata {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
  isExecuted?: boolean; 
}

const MyPick: React.FC<MyPickProps> = ({ products }) => {
  const executedProducts = products.filter((product) => product.isExecuted === true);

  return (
    <div className="my-pick-container">
      {executedProducts.map((product) => (
        <div key={product.id} className="product-item">
          {/* SVG 아이콘을 표시 /}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          {/ 제품 정보를 표시 /}
          <img src={product.img} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          {/ 세부정보 추가 */}
        </div>
      ))}
    </div>
  );
};

export default MyPick;