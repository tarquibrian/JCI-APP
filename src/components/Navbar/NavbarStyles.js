import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarSection = styled.nav`
  height: ${({ height }) => (height ? height : "55px")};
  width: 100vw;
  background: ${({ bgColor }) => (bgColor ? bgColor : "var(--color-dark)")};
  color: #fff;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  /* background: tomato; */
  width: 80%;
  max-width: 1500px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: tomato;
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 5rem;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`;

export const NavbarLink = styled.li`
  margin: 0 0.8rem;
  padding: 0.35rem 0.5rem;
  font-size: 16px;
  font-weight: normal;
  border-radius: 4px;
  ${NavLink} & {
    a {
    }
  }
  &:hover {
    background-color: var(--color-secondary);
    cursor: pointer;
  }
`;

export const NavbarButton = styled(Link)`
  button {
    background: var(--color-secondary-variant);
    width: fit-content;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.7rem 0.5rem;
    color: var(--color-dark);
    border-radius: 5px;
    &:hover {
      background: #ccae16;
      cursor: pointer;
    }
  }
`;
