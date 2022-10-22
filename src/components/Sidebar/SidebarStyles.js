import styled from "styled-components";

export const Sidebar__Section = styled.section`
  /* margin-top: 1rem; */
  position: fixed;
  height: 100%;
  /* min-width: 1920px; */
  width: ${({ sidebarSize }) => (sidebarSize ? sidebarSize : "14.777%")};
  max-width: 300px;
  /* margin-top: 200px; */
  overflow: auto;
  color: black;
  /* border-right: 2px solid #1d3147; */
  background: var(--primaryLightColor);
  z-index: 11;
  /* padding: 2rem 3rem; */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  
  /* display: flex; */
  /* flex-direction: column;  */
  /* align-items: center; */
  li {
    padding: 0.5rem 0;
    h2 {
      background: #1d3147;
      color: var(--color-secondary);
      font-size: 18px;
      font-weight: 400;
    }
  }
`;

export const JCI__Logo = styled.div`
  /* padding: 1rem 2.6rem; */
  margin: 2rem 4rem;
  background: tomato;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const SidebarMenu = styled.div`
  ul {
    li{
      background-color: red;
      a {
        background-color: blue;
        color: black;
      }
    }
  }
`