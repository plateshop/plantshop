import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // 이 부분 수정
import React, { FC } from "react";
import logo from "../img/logo/logo2.png";
import menu1 from "../img/ui/search.png";
import menu2 from "../img/ui/person.png";
import menu3 from "../img/ui/favorite.png";
import menu4 from "../img/ui/cart.png";
import "../styles/navbar.css";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  return (
    <header className="Navbar">
      <section className="Navbar-member">
          <a href="/login" className="member">회원가입</a>
          <a href="/login" className="member">로그인</a>
      </section>    
      <div className="Navbar-content">
        <div className="Navbar-logo">
          <a className="Logo-wrap" href="/">
            <img className="logo" src={logo} alt="Crow Canyon Home" width="400" height="100" />
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
            <a href="/List">
              <img src={menu4} width="30" />
            </a>  
          </li>
        </div>
      </div>
      <nav className="Navbar-menu">
        <ul className="menu-wrap">
          <a className="menu">Cup</a>
          <a className="menu">Bowls</a>
          <a className="menu">Plates</a>
          <a className="menu">kitchenware</a>
        </ul>
      </nav> 
   </header>
  );
};
