import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

export default function Input({ label, value, onKeyUp, ...otherProps }) {
  return (
    <>
      <label>{label}</label>
      <DebounceInput
        type="search"
        element={InputField}
        minLength={3}
        debounceTimeout={100}
        onChange={(e) => onKeyUp(e)}
        value={value}
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
  border-radius: 0 20px;
  border: solid 0;
  padding: 15px;
  z-index: 1;

  :focus {
    outline: 0;
  }
`;
