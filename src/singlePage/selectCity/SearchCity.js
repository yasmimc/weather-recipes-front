import { useContext, useState } from "react";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import SpinnerLoader from "../../components/SpinnerLoader";
import GlobalContext from "../../contexts/GlobalContext";
import useApi from "../../hooks/useApi";
import SearchResults from "./SearchResult";
import { SearchContainer } from "./Styles";

export function SearchCity() {
  const { city } = useApi();
  const { recipe } = useApi();
  const {
    setSelectedCity,
    setRecipe,
    setWeather,
    cityResults,
    setCityResults,
  } = useContext(GlobalContext);

  const [geolocation, setGeolocation] = useState(null);
  const [loadingRecipe, setLoadingRecipe] = useState(false);

  function searchCity(e) {
    if (e.key === "Escape") {
      e.target.value = "";
    }
    if (e.target.value === "") {
      setCityResults(null);
      return;
    }
    const value = e.target.value;

    if (value.length > 2) {
      city
        .getCities(value)
        .then((resp) => setCityResults(resp.data))
        .catch((error) => {
          if (error.response.status === 503) {
            alert("Could not connect to server, please try again later.");
          }
          console.error(error);
        });
    }
  }

  function useLocation() {
    setGeolocation(null);
    if (geolocation) {
      selectCity({
        name: `${(geolocation.latitude, geolocation.longitude)}`,
        coord: { lat: geolocation.latitude, lon: geolocation.longitude },
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      function (position) {
        if (!geolocation) {
          selectCity({
            coord: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
            name: `${position.coords.latitude}, ${position.coords.longitude}`,
          });
        }
      },
      function errorCallback() {
        alert("Unable to get your location, try searching by city name.");
      }
    );
  }

  function selectCity(city) {
    setLoadingRecipe(true);
    recipe
      .getRecipeByWeather(city.coord)
      .then((resp) => {
        setRecipe(resp.data.recipe);
        setWeather(resp.data.weather);
        setSelectedCity(city.name);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoadingRecipe(false);
        setCityResults(null);
      });
  }

  return loadingRecipe ? (
    <SpinnerLoader />
  ) : (
    <SearchContainer>
      <Button onClick={useLocation}>Use your location</Button>
      <SearchInput
        placeholder="Or type your city here..."
        onKeyUp={searchCity}
      />
      <SearchResults
        results={cityResults}
        setLoadingRecipe={setLoadingRecipe}
        selectCity={selectCity}
      />
    </SearchContainer>
  );
}
