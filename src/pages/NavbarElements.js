import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  // height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,0.4) 0%, rgba(253,29,29,0.1) 50%, rgba(252,176,69,0.6) 100%); 
  position: fixed;

  &:hover {
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); 
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 5px;
  }
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p{
  transform: translate(-175%, 100%);
  font-weight: bold;
}
`
export const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
transform: translate(-30%, -15%);
`