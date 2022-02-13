import { useContext, useState } from "react";
import SearchInput from "../../components/SearchInput";
import SpinnerLoader from "../../components/SpinnerLoader";
import GlobalContext from "../../contexts/GlobalContext";
import useApi from "../../hooks/useApi";
import SearchResults from "./SearchResult";

export function SearchCity() {
  const { city } = useApi();
  const [loadingRecipe, setLoadingRecipe] = useState(false);
  const { cityResults, setCityResults } = useContext(GlobalContext);

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
        .catch((error) => console.error(error));
    }
  }

  return loadingRecipe ? (
    <SpinnerLoader />
  ) : (
    <>
      <SearchInput placeholder="Type your city here..." onKeyUp={searchCity} />
      <SearchResults
        results={cityResults}
        setLoadingRecipe={setLoadingRecipe}
      />
    </>
  );
}
