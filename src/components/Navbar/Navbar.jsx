import React from "react";
import {
  NavbarSection,
  NavbarContainer,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarButton,
  NavbarMenu,
} from "./NavbarStyles";
import NavbarImg from "../../images/jci-logo.png";
import { nav_links } from "../../Data/navbar";
import { NavLink } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { user_list } from "../../Data/users_list";

export const Navbar = () => {
  console.log(user_list[0]);
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
          <NavbarButton to="/login">
            <button>
              <HiUser /> Acceder
            </button>
          </NavbarButton>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarSection>
  );
};

export const AdminNavbar = ({ headerSize }) => {
  return (
    <NavbarSection height={headerSize} bgColor="#e02b2b">
      <NavbarContainer>NAVBAR ADMIN</NavbarContainer>
    </NavbarSection>
  );
};
