import styled from "styled-components";

export const HeroSection = styled.section`
  /* margin-top: 3.5rem; */
  /* height: 55vh; */
  /* overflow: hidden; */
  /* height: 100%;
  width: 100%; */
  /* border-bottom: 2px solid #001f54; */
`;

export const HeroContainer = styled.div`
  height: 60vh;
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
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 4px;
  z-index: 9;
`;

export const HeroImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const HeroSearchTitle = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-weight: lighter;
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
  }
`;

export const HeroSearchInput = styled.div`
  position: relative;
  display: flex;
  input {
    display: block;
    margin: 0;
    padding: 0.5rem 1.1rem;
    color: inherit;
    width: 100%;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: inherit;
    line-height: 1.8;
    border: none;
    border-radius: 3px;
    color: var(--color-dark);
    &::placeholder {
      color: #b0bec5;
      font-weight: 300;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    padding: 0 1rem;
    margin: 0 0 0 0.5rem;
    border-radius: 3px;
    outline: none;
    border: none;
    background: var(--color-secondary);
    color: var(--color-primary);
    font-size: 1.1rem;
    font-weight: 400;

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      cursor: pointer;
      background: rgb(0, 195, 255);
    }
  }
`;
export const HeroSearchContent = styled.div``;

export const HeroSearchContentCategories = styled.div``;

export const HeroSearchContentResults = styled.div``;
