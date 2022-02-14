import { CityOption, ResultsContainer } from "./Styles";

export default function SearchResults({ results, selectCity }) {
  return (
    <ResultsContainer display={!!results}>
      {!!results && !results.length ? (
        <p>Sorry, we didn't find any city with this name</p>
      ) : (
        results?.map((city) => (
          <CityOption key={city.id} onClick={() => selectCity(city)}>
            {city.name} - {city.sys.country}
          </CityOption>
        ))
      )}
    </ResultsContainer>
  );
}
