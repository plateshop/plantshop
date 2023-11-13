import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../styles/PlatesDetail.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CupData from "../Data/CupData";

interface MatchParams {
  id: string;
}

const CupDetail: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const id = parseInt(match.params.id);
  const cup = CupData.find((item) => item.id === id);

  if (!cup) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detail_wrap">
      <Navbar />
      <div className="detail_out">
        <div className="product_detail">
          <div className="detail_container">
            <div className="detail_container_imgarea">
              {Array.isArray(cup.img) &&
                cup.img.map((src, index) => (
                  <img key={index} src={src} alt={cup.title} />
                ))}
            </div>
            <div className="detail_container_menu">
              <div className="detail_container_menu_fixbox">
                <div className="detail_container_info">
                  <h4 className="info_title">{cup.title}</h4>
                  <div className="info_wrap">
                    <p className="info_wrap_price">{cup.price}</p>
                    <span className="info_wrap_like">하트가 올자리</span>
                  </div>
                  <p className="info_wrap_detail">{cup.detail}</p>
                </div>
                <div className="detail_container_total"></div>
                <div className="detail_container_button">
                  {/* "Back to List" 링크 추가 */}
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

export default CupDetail;
