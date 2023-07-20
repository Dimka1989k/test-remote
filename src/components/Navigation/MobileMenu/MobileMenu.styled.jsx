import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1111111;
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;

  svg {
    padding: 6px;
    border-radius: 50%;
    border: 3px solid #d1fae5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #047857;

    :hover {
      transform: scale(1.1);
      transition: transform 0.5s ease;
      background-color: #d1fae5;
      color: #fff;
    }
  }
`;

export const NavItemLinks = styled.li`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavItem = styled(NavLink)`
  margin-top: 40px;
  color: #f0f3fd;
  padding: 8px 26px;
  border-radius: 32px;
  border: 3px solid #d1fae5;
  background: rgba(255, 255, 255, 0.1);
  color: #047857;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
    background-color: #d1fae5;
    color: #fff;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    stroke: #047857;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(180deg);
    stroke: #fff;
  }
`;

export const NavDropDown = styled.ul`
  display: block;
  justify-content: center;
  align-items: center;
`;
