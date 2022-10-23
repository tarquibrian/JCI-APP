import React from "react";
import styled from "styled-components";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import { Global__Section } from "../../styles/layout";

const Home = () => {
  return (
    <>
      <Global__Section>
        <Navbar />
        {/* <Hero /> */}
        <Gallery />
      </Global__Section>
    </>
  );
};

export default Home;
