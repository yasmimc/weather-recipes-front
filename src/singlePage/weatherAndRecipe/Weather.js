import { HalfContainer } from "./Styles";

export default function Weather({ weather }) {
  return (
    <HalfContainer>
      <h2>{weather.current.temp}ºC</h2>
    </HalfContainer>
  );
}
