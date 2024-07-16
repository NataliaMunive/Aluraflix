// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2222;
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  a {
    margin-right: 20px;
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }
  a.selected {
    background-color: #ff9ec6; /* Color rosa pastel */
    color: #1a1a1a;
  }
`;

const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/aluraflix_logo.png" alt="Aluraflix Logo" />
      </Link>
      <Nav>
        <Link to="/" className={location.pathname === "/" ? "selected" : ""}>Home</Link>
        <Link to="/new-video" className={location.pathname === "/new-video" ? "selected" : ""}>Nuevo Video</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
