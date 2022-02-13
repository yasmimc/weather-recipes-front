import { MapContainer } from "react-leaflet";
import styled from "styled-components";

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
  overflow-wrap: anywhere;

  h3 {
    height: 80px;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      cursor: pointer;
    }
  }
`;

export const Map = styled(MapContainer)`
  width: 300px;
  height: 300px;
  border-radius: 25px;
  z-index: 0;
`;
