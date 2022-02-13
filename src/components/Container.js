import styled from "styled-components";
import { palette } from "../styles/GlobalStyles";

export default styled.div`
  margin-top: 162px;
  background-color: ${palette.color5};
  opacity: 0.9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-bottom: 100px;

  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }
`;
