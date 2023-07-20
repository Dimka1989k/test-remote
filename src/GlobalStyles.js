import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
 height : 100%;
}


a {
  
  text-decoration: none;
}

body {
  font-family: "Lexend", sans-serif;
  background-color: #fff;
  color: #111111;
  margin: 0; 
  padding: 0;
  min-width: 320px;
  height: 100%;


   &.no-scroll {
  overflow: hidden !important;
}
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
}

`;
