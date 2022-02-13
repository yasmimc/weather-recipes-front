import { createGlobalStyle } from "styled-components";

export const palette = {
  color1: "#32A87A",
  color2: "#CFE6DC",
  color3: "#6DD1AA",
  color4: "#A94835",
  color5: "#D17D6D",
};

export default createGlobalStyle`

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }  

  ul {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    font-size: smaller;
    color: white;

    :hover {
      color: ${palette.color3}
    }
  }

  img {
    border-radius: 25px;
  }

  * {
    box-sizing: border-box;
  }

`;
