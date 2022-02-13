import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import useApi from "../../hooks/useApi";

export function SearchCity() {
  const { city } = useApi();
  const [results, setResults] = useState(null);

  function searchCity(e) {
    if (e.key === "Escape") {
      e.target.value = "";
      setResults(null);
      return;
    }
    const value = e.target.value;
    if (value.length > 2) {
      city
        .getCities(value)
        .then((resp) => setResults(resp.data))
        .catch(console.error());
    }
  }

  function selectCity(coord) {}

  return (
    <>
      <Input label="Type your city here:" onKeyUp={searchCity} />
      <ResultsContainer display={results?.length}>
        {results?.map((city) => (
          <CityOption key={city.id} onClick={() => selectCity(city.coord)}>
            {city.name} - {city.sys.country}
          </CityOption>
        ))}
      </ResultsContainer>
    </>
  );
}

const ResultsContainer = styled.div`
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

const CityOption = styled.p`
  cursor: pointer;
`;
