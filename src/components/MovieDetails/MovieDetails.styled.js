import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



export const Box = styled.div `
display: flex;
width: 100%;
margin-top: 30px;
margin-left: 15px;
`
export const MovieImg = styled.img`
border-radius: 10px;
`
export const MovieDetails = styled.div `
border-radius: 10px;
margin-left: 15px;

`
export const Name = styled.h2 `
font-family: Roboto;
font-weight: 900;
font-size: 36px;
`
export const Overview = styled.h3`
font-family: Roboto;
font-weight: 500;
font-size: 25px;
`
export const Details = styled.p`
font-family: Roboto;
font-weight: 300;
font-size: 20px;
`

export const GoBack = styled.button`
margin-top: 15px;
margin-left: 25px;

`

export const Information = styled.h3`
font-family: Roboto;
font-weight: 700;
font-size: 28px;

`

export const Additional = styled(NavLink)`
padding: 5px 18px;
border: 2px solid black;
border-radius: 5px;
text-decoration: none;
text-transform: uppercase;
color: black;
font-weight: bold;
margin-bottom: 10px;

&.active {
    background-color: #2196F3;
    color: white;
}
`