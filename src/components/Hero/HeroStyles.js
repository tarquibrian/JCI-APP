import styled from "styled-components";

export const HeroSection = styled.section`
  margin-top: 3.5rem;
  /* height: 55vh; */
  /* overflow: hidden; */
  /* height: 100%;
  width: 100%; */
  /* border-bottom: 2px solid #001f54; */
`;

export const HeroContainer = styled.div`
  height: 65vh;
  width: 100%;
  position: relative;
  /* display: grid;
  place-items: center; */
`;

export const HeroContainerBG = styled.div`
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  /* position: absolute; */
`;

export const HeroSearch = styled.div`
  background: #001d3d;
  color: #fff;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;;
  border-radius: 4px;
  z-index: 9;
`;

export const HeroImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
