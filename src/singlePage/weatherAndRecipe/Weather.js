import { HalfContainer, Map } from "./Styles";
import { TileLayer, Marker } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import SearchCityAgain from "./SearchCityAgain";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

let DefaultIcon = Leaflet.icon({
  ...Leaflet.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

export default function Weather({ selectedCity }) {
  const { weather } = useContext(GlobalContext);

  return (
    <HalfContainer>
      <h3>
        {selectedCity} ({weather.current.temp}ºC)
      </h3>
      {weather && (
        <Map
          center={[weather.lat, weather.lon]}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[weather.lat, weather.lon]}></Marker>
        </Map>
      )}
      <SearchCityAgain />
    </HalfContainer>
  );
}
