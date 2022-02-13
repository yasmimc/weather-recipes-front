import { HalfContainer } from "./Styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import styled from "styled-components";

let DefaultIcon = Leaflet.icon({
  ...Leaflet.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

export default function Weather({ weather, selectedCity }) {
  console.log({ weather, selectedCity });
  const position = [weather.lat, weather.lon];
  return (
    <HalfContainer>
      <h3>
        {selectedCity} ({weather.current.temp}ºC)
      </h3>
      <Map center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </Map>
    </HalfContainer>
  );
}

const Map = styled(MapContainer)`
  width: 300px;
  height: 300px;
  border-radius: 25px;
  z-index: 0;
`;
