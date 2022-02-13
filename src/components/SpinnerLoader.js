import styled from "styled-components";
import { BallTriangle as Loader } from "react-loader-spinner";
import { palette } from "../styles/GlobalStyles";
import { HalfContainer } from "../singlePage/weatherAndRecipe/Styles";

export default function SpinnerLoader() {
  return (
    <HalfContainer>
      <LoaderContainer>
        <Loader color={palette.color2} height={100} width={100} />
      </LoaderContainer>
    </HalfContainer>
  );
}

const LoaderContainer = styled.div`
  margin: 250px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;
