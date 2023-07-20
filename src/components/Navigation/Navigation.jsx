import { useState } from "react";

import {
  NavMain,
  NavUl,
  NavItem,
  NavDropDown,
  NavItemLinks,
  ButtonBurger,
} from "./Navigation.styled.jsx";
import { SignUpButton } from "../SighUpButton/SignUpButton.jsx";
import { ReactComponent as Aroww } from "../../image/Arrow.svg";

import { GiHamburgerMenu } from "react-icons/gi";
import { MobileMenu } from "./MobileMenu/MobileMenu.jsx";

export const Navigation = () => {
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePropertyMouseEnter = () => {
    setShowPropertyDropdown(true);
  };

  const handlePropertyMouseLeave = () => {
    setShowPropertyDropdown(false);
  };
  return (
    <>
      <NavMain>
        <NavUl>
          <li>
            <NavItem to="/">About Us</NavItem>
          </li>
          <li>
            <NavItem to="/">Article</NavItem>
          </li>
          <li
            onMouseEnter={handlePropertyMouseEnter}
            onMouseLeave={handlePropertyMouseLeave}
          >
            <NavItem to="/">
              Property
              <Aroww />
            </NavItem>
            {showPropertyDropdown && (
              <NavDropDown>
                <NavItemLinks>
                  <NavItem to="/">House</NavItem>
                </NavItemLinks>
                <NavItemLinks>
                  <NavItem to="/">Villa</NavItem>
                </NavItemLinks>
                <NavItemLinks>
                  <NavItem to="/">Apartment</NavItem>
                </NavItemLinks>
              </NavDropDown>
            )}
          </li>
          <SignUpButton />
        </NavUl>
        <ButtonBurger onClick={() => setOpen(true)}>
          <GiHamburgerMenu />
        </ButtonBurger>
        {open && <MobileMenu open={open} setOpen={setOpen} />}
      </NavMain>
    </>
  );
};
