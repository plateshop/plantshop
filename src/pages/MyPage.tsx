import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import UserInfo from './MyInfo';
import Favorite from './MyPick';
import '../styles/MyPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const MyPage: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>(''); // 현재 선택된 메뉴의 상태
    const { path, url } = useRouteMatch(); 
  
    const handleMenuClick = (menu: string) => {
      setSelectedMenu(menu);
    };
  
    return (
    <div>
      <div className="mypage-container">
      <div className="mypage-header">
        <div className="mypage-title">마이 페이지</div>
        <div className="menu-box">
        <div
              className={`menu-item ${selectedMenu === 'orderHistory' && 'selected'}`}
              onClick={() => handleMenuClick('orderHistory')}
            >
              <Link to={`${url}/orderHistory`}>주문 내역</Link>
            </div>
            <div
              className={`menu-item ${selectedMenu === 'personalInfo' && 'selected'}`}
              onClick={() => handleMenuClick('MyInfo')}
            >
              <Link to={`${url}/MyInfo`}>개인 정보</Link>
            </div>
            <div
              className={`menu-item ${selectedMenu === 'wishlist' && 'selected'}`}
              onClick={() => handleMenuClick('MyPick')}
            >
              <Link to={`${url}/MyPick`}>찜한 상품</Link>
            </div>
        </div>
        </div>
        <div className="content-box">
          {/* 각 메뉴에 해당하는 페이지를 렌더링 */}
          <Switch>
            <Route path={`${path}/orderHistory`}>
              <OrderHistory />
            </Route>
            <Route path={`${path}/MyInfo`}>
              <UserInfo />
            </Route>
            <Route path={`${path}/MyPick`}>
              <Favorite />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default MyPage;
