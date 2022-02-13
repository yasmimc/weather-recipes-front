import styled from "styled-components";
import { SearchCity } from "../selectCity/SearchCity";

export default function SearchCityAgain() {
  return (
    <SearchCityAgainStyles>
      <h4>Want to search another location? </h4>
      <SearchCity />
    </SearchCityAgainStyles>
  );
}

const SearchCityAgainStyles = styled.div`
  margin-top: 100px;
`;
