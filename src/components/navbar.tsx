import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // 이 부분 수정
import React, { FC, useContext, useState } from "react";
import logo from "../img/logo/logo2.png";
import menu1 from "../img/ui/search.png";
import menu2 from "../img/ui/person.png";
import menu3 from "../img/ui/favorite.png";
import menu4 from "../img/ui/cart.png";
import "../styles/Navbar.css";
import { useAuth } from "../AuthContext";
import Search from "../components/Search";

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

  const toggleSearch = () => {
    setSearchVisible((prevVisible) => {
      console.log("isSearchVisible:", !prevVisible);
      return !prevVisible;
    });
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
              <NavLink to="/joinpage" className="member">회원가입</NavLink>
              <NavLink to="/login" className="member">로그인</NavLink>
            </>
          )}
        </div>
      </div>
      <div className="Navbar-content">
       <div className="Logo-right-wrap">
        <div className="Navbar-logo">
          <a className="Logo-wrap" href="/main">
            <img className="logo" src={logo} alt="Crow Canyon Home" width="300" height="80" />
          </a>
        </div>  
        <div className="right-menu">
        <li className={`menu-search ${isSearchVisible ? 'click' : ''}`} onClick={toggleSearch}>
    <img src={menu1} width="30" />
    {isSearchVisible && <Search />}
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
          <a href="/Cup" className="menu">Cup</a>
          <a href="/Bowls" className="menu">Bowls</a>
          <a href="/Plates" className="menu">Plates</a>
          <a href="/Kitchenware" className="menu">Kitchenware</a>
        </ul>
      </nav> 
   </header>
  );
};

export default Navbar; 

// import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom"; // 이 부분 수정
// import React, { FC } from "react";
// import logo from "../img/logo/logo2.png";
// import menu1 from "../img/ui/search.png";
// import menu2 from "../img/ui/person.png";
// import menu3 from "../img/ui/favorite.png";
// import menu4 from "../img/ui/cart.png";
// import "../styles/Navbar.css";

// type NavbarProps = {
//   isLoggedIn: boolean;
//   onLogout: () => void;
// };

// export const Navbar: FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
//   return (
//     <NavbarBootstrap bg="light" expand="lg" className="Navbar">
//       <Container>
//         <NavbarBootstrap.Brand href="/main">
//           <img
//             className="logo"
//             src={logo}
//             alt="Crow Canyon Home"
//             width="400"
//             height="100"
//           />
//         </NavbarBootstrap.Brand>
//         <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
//         <NavbarBootstrap.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/">홈</Nav.Link>
//             <Nav.Link href="/Cup">Cup</Nav.Link>
//             <Nav.Link href="/Bowls">Bowls</Nav.Link>
//             <Nav.Link href="/Plates">Plates</Nav.Link>
//             <Nav.Link href="/Kitchenware">Kitchenware</Nav.Link>
//           </Nav>
//           <Nav className="right-menu">
//             <Nav.Link href="/">
//               <img src={menu1} width="30" alt="" />
//             </Nav.Link>
//             {isLoggedIn ? (
//               <>
//                 <Nav.Link href="/List">
//                   <img src={menu3} width="30" alt="" />
//                 </Nav.Link>
//                 <Nav.Link href="/List">
//                   <img src={menu4} width="30" alt="" />
//                 </Nav.Link>
//                 <Nav.Link href="#" onClick={onLogout}> {/* 텍스트 클릭으로 로그아웃 */}
//                 로그아웃
//               </Nav.Link>
//             </>
//             ) : (
//               <>
//                 <Nav.Link href="/Register">
//                   <img src={menu2} width="30" alt="" />
//                 </Nav.Link>
//                 <Link to="/login">
//                   <Nav.Link>로그인</Nav.Link>
//                 </Link>
//               </>
//             )}
//           </Nav>
//         </NavbarBootstrap.Collapse>
//       </Container>
//     </NavbarBootstrap>
//   );
// };