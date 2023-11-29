import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // 이 부분 수정
import React, { FC, useContext, useState } from "react";
import logo from "../img/logo/logo2.png";
import menu1 from "../img/ui/search.png";
import menu2 from "../img/ui/person.png";
import menu3 from "../img/ui/favorite.png";
import menu4 from "../img/ui/cart.png";
import "../styles/Navbar.css";
import Cupdata from "../Data/Cupdata";
import Bowlsdata from "../Data/Bowlsdata";
import Kitchenwaredata from "..//Data/Kitchenwaredata";
import Platesdata from "../Data/Platesdata";

type ProductData = {
  id: number;
  title: string;
  img: string;
  keywords: string[];
};

type NavbarProps = {
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn = false,
  userName = "",
  onLogout = () => {},
}) => {
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const ProductDataSources: ProductData[][] = [
    Cupdata,
    Bowlsdata,
    Kitchenwaredata,
    Platesdata,
  ];

  const toggleSearch = () => {
    setSearchVisible((prevVisible) => !prevVisible);
  };

  const handleMenu1Click = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    toggleSearch();
  };

  const handleSearchContainerClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const allProducts: ProductData[] = ProductDataSources.flatMap((data) => data);

  const filteredProducts = allProducts.filter((product) =>
    (product.keywords || []).some((keyword) =>
      keyword.toLowerCase().includes(searchInput.toLowerCase())
    )
  );

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
            <li
              className={`menu-search ${isSearchVisible ? "click" : ""}`}
              onClick={toggleSearch}
            >
              <img src={menu1} width="30" onClick={handleMenu1Click} />
              <div
                className={`SearchContainer ${isSearchVisible ? "click" : ""}`}
                onClick={handleSearchContainerClick}
              >
                <input
                  type="text"
                  placeholder="상품을 검색하세요"
                  value={searchInput}
                  onChange={handleSearchChange}
                />
                {searchInput && isSearchVisible && (
                  <div className="search-results">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="search-result-item">
                        <img src={product.img} alt={product.title} />
                        <p>{product.title}</p>
                      </div>
                    ))}
                    {filteredProducts.length === 0 && <p>결과가 없습니다</p>}
                  </div>
                )}
              </div>
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
