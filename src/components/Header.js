import styled from "styled-components";
import { palette } from "../styles/GlobalStyles";

export default function Header() {
  return (
    <Container>
      <h1>
        <Serif>Weather</Serif> <Cursive>Recipes</Cursive>
      </h1>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${palette.color2};
`;

const Cursive = styled.span`
  font-family: "Lobster", cursive;
  color: ${palette.color4};
`;

const Serif = styled.span`
  font-family: "Heebo", sans-serif;
  color: ${palette.color1};
`;
