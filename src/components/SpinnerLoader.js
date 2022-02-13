import styled from "styled-components";
import { BallTriangle as Loader } from "react-loader-spinner";
import { palette } from "../styles/GlobalStyles";

export default function SpinnerLoader() {
  return (
    <LoaderContainer>
      <Loader color={palette.color2} height={100} width={100} />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
