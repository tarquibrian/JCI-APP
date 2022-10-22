import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarSection = styled.nav`
  height: ${({ height }) => (height ? height : "100px")};
  /* width: 100%; */
  /* max-width: 1920px; */
  /* background: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-dark)"}; */
  color: #fff;
  display: grid;
  place-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  backdrop-filter: blur(6px);
  border-bottom: 2px solid #ffffff40;
  /* background: rgba(32, 180, 227, 0.6); */
  /* background: var(--navbarAdminColor); */
`;

export const NavbarContainer = styled.div`
  /* background: tomato; */
  width: 100%;
  /* max-width: 1500px; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background: tomato; */
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
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

export const NavbarOptions = styled.div`
  color: black;
  ul {
    display: flex;
    li {
      margin: 0 1rem;
    }
  }
`;

export const NavbarProfile = styled.div`
  color: var(--fontDarkColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 2rem;
  h2 {
    font-size: 1rem;
    font-weight: bold;
  }
  img {
    border-radius: 50%;
    display: block;
    width: 4rem;
    height: 4rem;
  }
  
`;
