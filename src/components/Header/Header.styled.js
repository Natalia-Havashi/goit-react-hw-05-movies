import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const NavList = styled.ul `
display: flex;
list-style: none;
padding: 0;

`

export const NavItem = styled.li `
margin-right: 20px;
margin-left: 25px;

`
export const LinkNav = styled(NavLink)`
padding: 10px 20px;
border: 1px solid black;
border-radius: 5px;
text-decoration: none;
text-transform: uppercase;
color: black;
font-weight: bold;

&.active {
    background-color: #2196F3;
    color: white;
}

`