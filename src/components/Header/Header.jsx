import React from 'react';
import { LinkNav, NavItem, NavList } from './Header.styled';


const Header = () => {
  return (
    <div>
      <NavList>
        <NavItem>
          <LinkNav to="/">Home</LinkNav>
        </NavItem>
        <NavItem>
          <LinkNav to="/movies">Movies</LinkNav>
        </NavItem>
      </NavList>
    </div>
  );
};


export default Header;
