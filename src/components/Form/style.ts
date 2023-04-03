import "styled-components";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.brand2};
  border-radius: 12px;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  span {
    font-size: 12px;
    ${({ theme }) => theme.colors.alert}
  }

  button {
    align-self: center;
  }

  .delete {
    display: flex;
    background-color: ${({ theme }) => theme.colors.alert};
    width: 100%;
    transition: 0.7 ease;
  }
`;
