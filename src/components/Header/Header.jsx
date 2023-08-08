import React from 'react';
import { LinkNav, NavItem, NavList } from './Header.styled';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  LinkNav: PropTypes.elementType.isRequired,
};
export default Header;
