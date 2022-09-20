import React from "react";
import {
  HeroSection,
  HeroImage,
  HeroContainer,
  HeroSearch,
  HeroContainerBG,
} from "./HeroStyles";
import HeroImg from "../../images/reunion11.jpg";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContainerBG>
          <HeroImage src={HeroImg} alt="hero media img" />
        </HeroContainerBG>
        <HeroSearch>
          <h2>JCI - MAS QUE NEGOCIOS</h2>
          <h2>JCI - MAS QUE NEGOCIOSsss</h2>
          <h2>JCI - MAS QUE NEGOCIOS</h2>
        </HeroSearch>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
