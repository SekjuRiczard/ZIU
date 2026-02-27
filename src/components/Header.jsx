import React from "react";
import styled from "styled-components";

const NavHeader = styled.header`
  background-color: #262626;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ff7f11;
`;

const NavLinks = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
  }
  li {
    cursor: pointer;
    font-weight: 500;
    &:hover {
      color: #acbfa4;
    }
  }
`;

const Header = () => (
  <NavHeader>
    <Logo>ZIU_STORE</Logo>
    <NavLinks>
      <ul>
        <li>Kolekcja</li>
        <li>O nas</li>
        <li>Kontakt</li>
      </ul>
    </NavLinks>
  </NavHeader>
);

export default Header;
