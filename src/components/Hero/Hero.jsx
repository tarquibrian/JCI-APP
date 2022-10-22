import { Link } from "react-router-dom";
import React from "react";
import {
  HeroSection,
  HeroImage,
  HeroContainer,
  HeroSearch,
  HeroContainerBG,
  HeroSearchInput,
  HeroSearchContent,
  HeroSearchContentCategories,
  HeroSearchContentResults,
  HeroSearchTitle,
} from "./HeroStyles";
import HeroImg from "../../images/reunion11.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContainerBG>
          <HeroImage src={HeroImg} alt="hero media img" />
        </HeroContainerBG>
        <HeroSearch>
          <HeroSearchTitle>
            <h1>JCI - Junior Chamber International</h1>
            <h2>
              Conozca cómo estamos transformando este espacio digital visitando
              nuestro nuevo sitio web temporal.
            </h2>
          </HeroSearchTitle>
          <HeroSearchInput>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Buscar Informacion"
            />
            <button>
              <AiOutlineSearch />
              Buscar
            </button>
          </HeroSearchInput>
          <HeroSearchContent>
            <HeroSearchContentCategories></HeroSearchContentCategories>
            <HeroSearchContentResults>
              <Link to="/login">
                <button>hola</button>
              </Link>
            </HeroSearchContentResults>
          </HeroSearchContent>
        </HeroSearch>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
