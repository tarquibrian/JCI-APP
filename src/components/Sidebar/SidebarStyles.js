import styled from "styled-components";

export const Sidebar__Section = styled.section`
  /* margin-top: 1rem; */
  position: fixed;
  height: 100%;
  width: ${({sidebarSize}) => (sidebarSize ? sidebarSize : '300px')};
  overflow: auto;
  color: black;
  border-right: 2px solid #1d3147;
  background: grey;
  z-index: 2;

  li {
    padding: .5rem 0;
    h2 {
      background: #1d3147;
      color: var(--color-secondary);
      font-size: 18px;
      font-weight: 400;
    }
  }
`;
