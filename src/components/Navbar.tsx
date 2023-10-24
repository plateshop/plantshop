import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // 이 부분 수정
import React, { FC, useState } from "react";
import logo from "../img/logo/logo2.png";
import menu1 from "../img/ui/search.png";
import menu2 from "../img/ui/person.png";
import menu3 from "../img/ui/favorite.png";
import menu4 from "../img/ui/cart.png";
import "../styles/Navbar.css";

type NavbarProps = {
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
};

export const Navbar: FC<NavbarProps> = ({ isLoggedIn, userName, onLogout }) => {
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const addToCart = () => {};

  return (
    <header className="Navbar">
      <div>
        <section className="Navbar-member">
          {isLoggedIn ? (
            <>
              <span>환영합니다, {userName}님</span>
              <button onClick={onLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <NavLink to="/joinpage" className="member">
                회원가입
              </NavLink>
              <NavLink to="/login" className="member">
                로그인
              </NavLink>
            </>
          )}
        </section>
        <div className="Navbar-content">
          <div className="Navbar-logo">
            <a className="Logo-wrap" href="/main">
              <img
                className="logo"
                src={logo}
                alt="Crow Canyon Home"
                width="400"
                height="100"
              />
            </a>
          </div>
          <div className="right-menu">
            <li className="menu-search">
              <a href="/">
                <img src={menu1} width="40" data-tooltip="검색" />
              </a>
            </li>
            <li className="menu-account">
              <a href="/Register">
                <img src={menu2} width="40" data-tooltip="마이 페이지" />
              </a>
            </li>
            <li className="menu-wishlist">
              <a href="/List">
                <img src={menu3} width="40" data-tooltip="즐겨찾기" />
              </a>
            </li>
            <li className="menu-cart">
              <a href="/List">
                <img src={menu4} width="40" data-tooltip="장바구니" />
              </a>
            </li>
          </div>
        </div>
        <nav className="Navbar-menu">
          <ul className="menu-wrap">
            <a href="/Cup" className="menu">
              Cup
            </a>
            <a href="/Bowls" className="menu">
              Bowls
            </a>
            <a href="/Plates" className="menu">
              Plates
            </a>
            <a href="/Kitchenware" className="menu">
              Kitchenware
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;