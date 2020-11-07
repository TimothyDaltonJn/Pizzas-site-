import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  // background: rgb(255, 128, 0);
  // position: fixed;
`;

export const NavCart = styled.div`
  display: flex;
  align-items: center;

button {
  background-color: #e31837;
  margin-left: 17px;
  border-radius: 7px;
  color: white;
  padding: 8px 29px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition-duration: 0.4s;

  &:hover {
    background-color: rgb(255, 128, 0); 
  }


`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  height: 60px;
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
  display: flex;
  align-items: center;
  margin-right: 10px;

  button {
    background-color: #e31837;
    margin-right: 17px;
    border-radius: 7px;
    color: white;
    padding: 8px 29px;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    transition-duration: 0.4s;  
   
    &:hover {
      background-color: rgb(255, 128, 0);
    }
`;
