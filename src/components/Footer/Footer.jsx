import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  min-height: 100px;
  height: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
      </ul>
      <ul>
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <li>option5</li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
