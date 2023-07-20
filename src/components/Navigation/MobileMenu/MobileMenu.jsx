import { useState } from "react";
import {
  ContainerMenu,
  Button,
  NavUl,
  NavItem,
  NavDropDown,
  NavItemLinks,
} from "../../Navigation/MobileMenu/MobileMenu.styled.jsx";
import { CgClose } from "react-icons/cg";
import { SignUpButton } from "../../SighUpButton/SignUpButton.jsx";
import { ReactComponent as Aroww } from "../../../image/Arrow.svg";

export const MobileMenu = ({ open, setOpen }) => {
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);

  const handlePropertyMouseEnter = () => {
    setShowPropertyDropdown(true);
  };

  const handlePropertyMouseLeave = () => {
    setShowPropertyDropdown(false);
  };
  return (
    <ContainerMenu>
      <Button onClick={() => setOpen(false)}>
        <CgClose />
      </Button>
      <SignUpButton />
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
      </NavUl>
    </ContainerMenu>
  );
};
