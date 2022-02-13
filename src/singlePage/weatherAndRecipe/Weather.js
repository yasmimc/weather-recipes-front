import { HalfContainer } from "./Styles";

export default function Weather({ weather, selectedCity }) {
  return (
    <HalfContainer>
      <h3>
        {selectedCity} ({weather.current.temp}ºC)
      </h3>
    </HalfContainer>
  );
}
