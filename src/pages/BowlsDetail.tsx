import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../styles/Detail.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bowlsdata from "../Data/Bowlsdata";
import Heart from "../components/Heart";

interface MatchParams {
  id: string;
}

interface DetailProps extends RouteComponentProps<MatchParams> {}

interface Bowlsdata {
  id: number;
  img: string;
  title: string;
  price: number;
  detail: string;
  detailimg: string[];
  keywords: string[];
}

const BowlsDetail: React.FC<DetailProps> = ({ match }) => {
  const { id } = match.params;
  const product = Bowlsdata.find((item) => item.id === parseInt(id));

  const [isLiked, setLiked] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchUserLikeStatus = async () => {
      try {
        if (product) {
          // 서버에서 사용자의 좋아요 상태를 가져오는 API 엔드포인트를 호출
          const response = await fetch(`/api/user/likeStatus/${product.id}`);
          const data = await response.json();
          setLiked(data.isLiked);
        }
      } catch (error) {
        console.error("Error fetching user like status:", error);
      }
    };

    fetchUserLikeStatus();
  }, [product]);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="detail_wrap">
      <Navbar />
      <div className="detail_out">
        <div className="product_detail">
          <div className="detail_container">
            <div className="detail_container_imgarea">
              {product.detailimg.map((url, index) => (
                <img key={index} src={url} alt={`product-${index}`} />
              ))}
            </div>
            <div className="detail_container_menu">
              <div className="detail_container_menu_fixbox">
                <div className="detail_container_info">
                  <h4 className="info_title">{product.title}</h4>
                  <div className="info_wrap">
                    <p className="info_wrap_price">{product.price}</p>
                    <span>
                      <div className="info_wrap_like">
                        <Heart
                          like={isLiked}
                          onClick={() => setLiked(!isLiked)}
                        />
                      </div>
                      <div className="info_wrap_quantity">
                        <label htmlFor="quantity">수량:</label>
                        <input
                          type="number"
                          id="quantity"
                          min="1"
                          value={quantity}
                          onChange={handleQuantityChange}
                        />
                      </div>
                      <p className="info_wrap_price">
                        {`총 가격: "${(20000 * quantity).toLocaleString()}" 원`}
                      </p>
                      <p className="info_wrap_detail">{product.detail}</p>
                    </span>
                    {/*<svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      color="black"
                      height="27"
                      width="27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>찜</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>*/}
                  </div>
                  <p className="info_wrap_detail">{product.detail}</p>
                </div>
                <div className="detail_container_total"></div>
                <div className="detail_container_button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BowlsDetail;
