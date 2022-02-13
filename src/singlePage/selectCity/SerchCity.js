import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import useApi from "../../hooks/useApi";
import SearchResults from "./SearchResult";

export function SearchCity() {
  const { city } = useApi();
  const [results, setResults] = useState(null);
  const [loadingRecipe, setLoadingRecipe] = useState(false);

  function searchCity(e) {
    if (e.key === "Escape") {
      e.target.value = "";
    }
    if (e.target.value === "") {
      setResults(null);
      return;
    }
    const value = e.target.value;

    if (value.length > 2) {
      city
        .getCities(value)
        .then((resp) => setResults(resp.data))
        .catch((error) => console.error(error));
    }
  }

  return !loadingRecipe ? (
    <>
      <SearchInput label="Type your city here:" onKeyUp={searchCity} />
      <SearchResults results={results} setLoadingRecipe={setLoadingRecipe} />
    </>
  ) : (
    "Loading"
  );
}
