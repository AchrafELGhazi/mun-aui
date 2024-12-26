import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ scrolled }) => (scrolled ? '#ffffff' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4CAF50;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo src="/logo.png" alt="MUN AUI Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/apply">Apply</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

