import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // 이 부분 수정
import React, { FC, useContext, useState } from "react";
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

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, userName, onLogout }) => {
  Navbar.defaultProps = {
    isLoggedIn: false,
    userName: "",
    onLogout: () => {},
  };

  return (
    <header className="Navbar">
      <div className="login-box">
        <div className="Navbar-member">
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
        </div>
      </div>
      <div className="Navbar-content">
        <div className="Logo-right-wrap">
          <div className="Navbar-logo">
            <a className="Logo-wrap" href="/main">
              <img
                className="logo"
                src={logo}
                alt="Crow Canyon Home"
                width="300"
                height="80"
              />
            </a>
          </div>
          <div className="right-menu">
            <li className="menu-search">
              <a href="/">
                <img src={menu1} width="30" />
              </a>
            </li>
            <li className="menu-wishlist">
              <a href="/Register">
                <img src={menu2} width="30" />
              </a>
            </li>
            <li className="menu-account">
              <a href="/List">
                <img src={menu3} width="30" />
              </a>
            </li>
            <li className="menu-cart">
              <a href="/Cart">
                <img src={menu4} width="30" />
              </a>
            </li>
          </div>
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
    </header>
  );
};

export default Navbar;
