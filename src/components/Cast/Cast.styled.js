import styled from 'styled-components';
export const Container  = styled.div`
margin-left: 40px;
`
export const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
padding: 0;
gap: 20px;
`
export const List = styled.li`
width: 20%;
text-align: center;
box-sizing: border-box;
padding: 2px;
-webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  letter-spacing: 0.03em;
`
export const Actor = styled.img`
border-radius: 4px;
`

export const ActorName = styled.p `
font-family: Roboto;
font-weight: 500;
font-size: 20px;
`

export const ActorCharacter = styled.p `
font-family: Roboto;
font-weight: 300;
font-size: 15px;
`