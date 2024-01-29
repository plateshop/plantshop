import "../styles/Detail.css";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(newQuantity);
  };

  const pricePerUnit = 20000;
  const totalPrice = pricePerUnit * quantity;

  return (
    <div className="detail_wrap">
      <Navbar />
      <div className="detail_out">
        <div className="product_detail">
          <div className="detail_container">
            <div className="detail_container_imgarea">
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/D11_EBAFBCED8AB8_1.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909324-1111.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909346-D02_EC97B0ECB69CECBBB7.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230…D9994EBA9B420ECBAA1ECB298202023-01-0520173229.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909368-EBB3B4ECA095EBB3B8_10.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230…D9994EBA9B420ECBAA1ECB298202023-01-0520173423.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909388-EBB3B4ECA095EBB3B8_3.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909394-190812_92267_1.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909398-190812_91976.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909403-167411.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909417-ED9598EB8BA8.jpg"></img>
              <img src="https://crowcanyon.co.kr/web/upload/NNEditor/20230105/copy-1672909428-EBB688EB9F89ECA095EC8381.jpg"></img>
            </div>
            <div className="detail_container_menu">
              <div className="detail_container_menu_fixbox">
                <div className="detail_container_info">
                  <h4 className="info_title">D11 머그 민트마블1</h4>
                  <div className="info_wrap">
                    {/* 상품 수량 입력 탭 추가 */}
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
                      {pricePerUnit.toLocaleString()} 원
                    </p>
                    <p className="info_wrap_totalPrice">{`총 가격: ${totalPrice.toLocaleString()} 원`}</p>

                    <span className="info_wrap_like">
                      하트가 올자리
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="black"
                        height="27"
                        width="27"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>찜</title>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <p className="info_wrap_detail">
                    크로우캐년홈은 1977년 창업이래, 클래식한 디자인과 내구성 둘
                    다 갖춘 높은 퀄리티의 에나멜웨어를 만들어왔습니다. 미국 뿐
                    아니라 전세계적으로 유리나 플라스틱 등 깨지기 쉬운 소재가
                    환경에 안좋은 소재가 사용되는 것을 우려하여 지속 가능하며
                    청결하고 디자인까지 멋진 제품은 없을까 라는 아이디어에서
                    시작하여 만들어졌습니다. 머그의 용량은 340ml 이며, 색상은
                    민트 색상입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
