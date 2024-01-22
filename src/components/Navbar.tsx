import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import {
  NavLink,
  useHistory,
  withRouter,
  RouteComponentProps,
} from "react-router-dom"; // 이 부분 수정
import React, { FC, useContext, useState } from "react";
import logo from "../img/logo/logo2.png";
import menu1 from "../img/ui/search.png";
import menu2 from "../img/ui/person.png";
import menu3 from "../img/ui/favorite.png";
import menu4 from "../img/ui/cart.png";
import "../styles/Navbar.css";
import Cupdata from "../Data/Cupdata";
import Bowlsdata from "../Data/Bowlsdata";
import Kitchenwaredata from "../Data/Kitchenwaredata";
import Platesdata from "../Data/Platesdata";
import SearchResult from "../pages/SearchResults";
export type { ProductData };

type NavbarProps = RouteComponentProps & {
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
};

type ProductData = {
  id: number;
  img: string;
  title: string;
  price: string;
  detail: string;
  detailimg: string[];
  keywords: string[];
  type: string; // 각 상품의 타입 추가 (Cup, Bowls, Plates, Kitchenware 등)
};

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn = false,
  userName = "",
  onLogout = () => {},
}) => {
  const history = useHistory();
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ProductData[]>([]);

  const handleProductClick = (product: ProductData) => {
    // 검색 결과를 클릭하면 해당 상품이 속한 데이터의 타입을 확인하고 이동
    switch (product.type) {
      case "Cup":
        history.push(`/Detail/Cup/${product.id}`);
        break;
      case "Bowls":
        history.push(`/Detail/Bowls/${product.id}`);
        break;
      case "Plates":
        history.push(`/Detail/Plates/${product.id}`);
        break;
      case "Kitchenware":
        history.push(`/Detail/Kitchenware/${product.id}`);
        break;
      default:
        break;
    }
  };

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const filtered = allProducts.filter((product) =>
      `${product.title} ${product.detail}`.toLowerCase().includes(input)
    );
    setSearchResults(filtered);
  };

  const handleSearchKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searchResults.length > 0) {
      // 검색 결과 페이지로 이동하면서 검색어를 전달
      history.push(`/SearchResults/${searchInput}`, { results: searchResults });
    }
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
                  onKeyPress={handleSearchKeyPress}
                />
                {searchInput && isSearchVisible && (
                  <div className="search-results">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="search-result-item"
                        onClick={() => handleProductClick(product)}
                      >
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
              <a href="/Mypage">
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
