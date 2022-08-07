import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }

  html, body{
    border: 3px solid blue;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
