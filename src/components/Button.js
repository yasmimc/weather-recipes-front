import styled from "styled-components";
import { palette } from "../styles/GlobalStyles";

export default function Button({ width, heigth, children, ...otherProps }) {
  return (
    <ButtonStyle {...width} {...heigth} {...otherProps}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  border-radius: 20px;
  border: none;
  background-color: ${palette.color1};
  color: white;
  font-size: 20px;
  padding: 10px 0;
  margin: 0 60px;
  width: ${({ width }) => (width ? `${width}` : null)};
  height: ${({ height }) => (height ? `${height}` : null)};
  cursor: pointer;

  :hover {
    background-color: ${palette.color3};
  }
`;
