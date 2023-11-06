import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* Faz com que 1rem seja equivalente a 10px */
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem; 
    line-height: 1.6;
    color: #333;
  }

  h1 {
    font-size: 3.6rem; 
  }

  h2 {
    font-size: 3rem; 
  }

  h3 {
    font-size: 2.4rem; 
  }

  h4 {
    font-size: 2rem; 
  }

  p {
    font-size: 1.6rem; 
  }

`;

export default GlobalStyles;
