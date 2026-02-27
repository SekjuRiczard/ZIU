import React from "react";
import styled from "styled-components";

const NavShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(16px);
  background: linear-gradient(
    to bottom,
    rgba(12, 14, 24, 0.92),
    rgba(12, 14, 24, 0.82),
    transparent
  );
`;

const NavBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  color: #f9fafb;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  span {
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 20%, #fef3c7, #ff7f11);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #111827;
  }
`;

const NavLinks = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  font-size: 0.95rem;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  color: #e5e7eb;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(to right, #ff7f11, #f59e0b);
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavCta = styled.button`
  border-radius: 999px;
  border: 1px solid rgba(249, 250, 251, 0.28);
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(17, 24, 39, 0.85);
  color: #f9fafb;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: rgba(255, 127, 17, 0.7);
    color: #ffffff;
  }
`;

const Header = () => (
  <NavShell>
    <NavBar>
      <Logo>
        <span>ZI</span>
        ZIU_STORE
      </Logo>
      <NavLinks>
        <NavList>
          <NavItem>Kolekcja</NavItem>
          <NavItem>O nas</NavItem>
          <NavItem>Kontakt</NavItem>
        </NavList>
        <NavCta>
          Zaloguj się
          <span>→</span>
        </NavCta>
      </NavLinks>
    </NavBar>
  </NavShell>
);

export default Header;
