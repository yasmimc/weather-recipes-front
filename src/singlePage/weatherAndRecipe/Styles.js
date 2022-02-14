import { MapContainer } from "react-leaflet";
import styled from "styled-components";
import { palette } from "../../styles/GlobalStyles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 150px;
`;

export const HalfContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-wrap: anywhere;
  height: 100%;

  padding-bottom: 100px;
  margin-top: 162px;

  h3 {
    height: 80px;
    max-width: 500px;
    margin-bottom: 0;

    svg {
      cursor: pointer;

      :hover {
        color: ${palette.color3};
      }
    }
  }
`;

export const Map = styled(MapContainer)`
  width: 300px;
  height: 300px;
  border-radius: 25px;
  z-index: 0;
`;
