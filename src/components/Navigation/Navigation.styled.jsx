import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { device } from "../../utils/mixin";

const slideIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px;
    opacity: 1;
  }
`;

export const NavItem = styled(NavLink)`
  color: #f0f3fd;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #f0f3fd;
  text-decoration: none;
  margin-right: 18px;
  display: flex;
  align-items: center;

  :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    transition: transform 0.7s ease;

    &:hover {
      transform: rotate(180deg);
    }
  }
`;

export const NavMain = styled.nav`
  display: flex;
  margin-left: auto;
  margin-top: 15px;
  ${device.tablet} {
    margin-top: 46px;
  }
`;

export const NavUl = styled.ul`
  display: none;

  ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavDropDown = styled.ul`
  display: block;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 155px;
  animation: ${slideIn} 0.8s ease forwards;

  ${NavItem}:hover & {
    animation: none;
    max-height: 200px;
    opacity: 1;
  }
`;

export const NavItemLinks = styled.li`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ButtonBurger = styled.button`
  border: none;
  border-radius: 50%;
  background-color: transparent;

  svg {
    border-radius: 50%;
    color: #4be4c9;
    width: 40px;
    height: 40px;
  }

  ${device.tablet} {
    display: none;
  }
`;
