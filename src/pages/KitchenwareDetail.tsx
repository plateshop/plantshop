import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../styles/Detail.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Kitchenwaredata from '../Data/KitchenwareData';

interface MatchParams {
  id: string;
}

interface DetailProps extends RouteComponentProps<MatchParams> {}

const KitchenwareDetail: React.FC<DetailProps> = ({ match }) => {
  const { id } = match.params;
  const product = Kitchenwaredata.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>
  }

  return (
    <div className='detail_wrap'>
      <Navbar />
      <div className='detail_out'>
        <div className='product_detail'>
          <div className='detail_container'>
            <div className='detail_container_imgarea'>
            {product.detailimg.map((url, index) => (
            <img key={index} src={url} alt={`product-${index}`} />
            ))}
            </div>
            <div className='detail_container_menu'>
              <div className='detail_container_menu_fixbox'>
                <div className='detail_container_info'>
                  <h4 className='info_title'>{product.title}</h4>
                  <div className='info_wrap'>
                    <p className='info_wrap_price'>
                      {product.price}
                    </p>
                    <span className='info_wrap_like'>하트가 올자리<svg
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
                      </svg>
                    </span>
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

export default KitchenwareDetail;
