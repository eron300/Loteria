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
    height: 100%;
  }

  html, body{
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  
  body { 
    min-height: 100vh; 
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
