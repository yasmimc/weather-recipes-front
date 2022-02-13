import styled from "styled-components";

export const ResultsContainer = styled.div`
  height: 300px;
  ${({ display }) =>
    display
      ? `
  width: 400px;
  background-color: gray;
  width: 400px;
  font-size: 30px;
  border-radius: 0 20px;
  border: solid 0;
  padding: 15px;
  margin-top: -15px;
  overflow-y: scroll;`
      : null}
`;

export const CityOption = styled.p`
  cursor: pointer;
`;