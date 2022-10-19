import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  *::selection {
    color: rgb(32, 180, 227);
    background: #1d3147;
  }

  :root {
    font-size: 16px;
    --color-secondary: rgb(32, 180, 227);
    /* --color-secondary: rgb(0, 195, 255); */
    --color-secondary-variant: #ffd60a;
    /* --color-secondary-variant: #ccae16; */
    --color-primary: #fff;
    --color-dark: #000814;
    --color-dark-variant: #001d3d;
  }


  body {
      
    font-family: "Oswald", sans-serif;
    color: #fff;
  }

  a {
    color: #fff;
  }

  img::selection {
    color: none;
    background: none;
  }
  `;

export default GlobalStyle;
