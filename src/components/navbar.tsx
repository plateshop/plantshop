import { Navbar as NavbarBootstrap, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import React, { FC } from "react";
import logo from "../../img/logo2.png";
import menu1 from "../../img/search.png";
import menu2 from "../../img/person.png";
import menu3 from "../../img/favorite.png";
import menu4 from "../../img/cart.png";
import "../../styles/Navbar.css";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  return (
    <NavbarBootstrap>
      <Container>
        <NavbarBootstrap.Brand>
          <img src={logo} width="400" height="100" />
        </NavbarBootstrap.Brand>

        <div className="all">
          <Nav className="me-auto">
            <Nav.Link className="menu" href="/">
              <img src={menu1} width="30" />
            </Nav.Link>
            <Nav.Link className="menu" href="/Register">
              <img src={menu2} width="30" />
            </Nav.Link>
            <Nav.Link className="menu" href="/List">
              <img src={menu3} width="30" />
            </Nav.Link>
            <Nav.Link className="menu" href="/List">
              <img src={menu4} width="30" />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </NavbarBootstrap>
  );
};
