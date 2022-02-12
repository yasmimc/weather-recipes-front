import styled from "styled-components";

export default function Input({ label, ...otherProps }) {
  return (
    <>
      <label>{label}</label>
      <InputField {...otherProps}></InputField>
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
