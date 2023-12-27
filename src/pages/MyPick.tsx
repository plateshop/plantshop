import React from "react";

interface MyPickProps {
  products?: Cupdata[]; // Optional으로 변경
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

const MyPick: React.FC<MyPickProps> = ({ products = [] }) => {
  // products가 undefined일 경우를 방지하기 위해 기본값으로 빈 배열을 설정

  const executedProducts = products.filter(
    (product) => product.isExecuted === true
  );

  return (
    <div className="my-pick-container">
      <p>찜</p>
      {executedProducts.map((product) => (
        <div key={product.id} className="product-item">
          {/* SVG 아이콘을 표시 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          {/* 제품 정보를 표시 */}
          <img src={product.img} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          {/* 세부정보 추가 */}
        </div>
      ))}
    </div>
  );
};

export default MyPick;
