import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { palette } from "../styles/GlobalStyles";

export default function SearchInput({
  placeholder,
  value,
  onKeyUp,
  ...otherProps
}) {
  return (
    <>
      <DebounceInput
        type="search"
        element={InputField}
        minLength={3}
        debounceTimeout={100}
        onChange={(e) => onKeyUp(e)}
        value={value}
        placeholder={placeholder}
        {...otherProps}
      />
    </>
  );
}

const InputField = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 50px;
  font-size: 30px;
  border-radius: 10px;
  border: solid 2px ${palette.color3};
  padding: 25px 10px;
  z-index: 1;

  :focus {
    outline: 0;
  }

  ::placeholder {
    font-style: italic;
    font-size: smaller;
  }

  @media (max-width: 600px) {
    width: 300px;
  }

  ::placeholder {
    font-size: 23px;
  }
`;
