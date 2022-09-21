import React from "react";
import {
  NavbarSection,
  NavbarContainer,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarButton,
  NavbarMenu
} from "./NavbarStyles";
import NavbarImg from "../../images/jci-logo.png";
import { nav_links } from "../../Data/navbar";
import { NavLink } from "react-router-dom";
import { HiUser } from 'react-icons/hi'
const Navbar = () => {
  return (
    <NavbarSection>
      <NavbarContainer>
        <NavbarLogo to="/">
          <img src={NavbarImg} alt="junior chamber international" />
        </NavbarLogo>
        <NavbarMenu>
          <NavbarLinks>
            {nav_links?.map(({ name, path }, i) => {
              return (
                <NavbarLink>
                  <NavLink to={path}>{name}</NavLink>
                </NavbarLink>
              );
            })}
          </NavbarLinks>
          <NavbarButton><HiUser /> Acceder</NavbarButton>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarSection>
  );
};

export default Navbar;
