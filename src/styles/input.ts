import styled from "styled-components";

export const StyledTextInput = styled.input`
  width: 100%;
  min-width: 110px;
  max-width: 315px;
  height: 48px;
  border: 1.5px solid var(--grey-7);
  border-radius: 4px;
  padding: 24px 16px;
  background-color: var(--grey-7);
  color: var(--grey-1);
  ::placeholder {
    color: var(--grey-3);
  }
  :focus {
    outline-color: var(--brand-1);
    background-color: var(--grey-7);
  }
`;

export const StyledTextArea = styled(StyledTextInput)`
  height: 80px;
`;
