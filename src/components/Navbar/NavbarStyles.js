import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarSection = styled.nav`
  height: 3.5rem;
  width: 100vw;
  background: #000814;
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
  margin: 0 .8rem;
  padding: 0.35rem .5rem;
  font-size: 16px;
  font-weight: normal;
  border-radius: 4px;
  ${NavLink} & {
    a {

    }
  }
  &:hover {
    background-color: var(--color-secondary);
  }
`;

export const NavbarButton = styled.button``;
