import styled from "styled-components";

export const Dashboard__Section = styled.div`
  margin-top: ${({ headerMargin }) => (headerMargin ? headerMargin : "55px")};
  width: 100%;
  height: 80%;
  /* padding: 0 1rem; */
  display: flex;
  position: relative;
  background: red;
`;
