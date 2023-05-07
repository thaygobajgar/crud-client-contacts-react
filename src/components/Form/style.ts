import "styled-components";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--brand-2);
  border-radius: 12px;
  width: 350px;
  max-width: 90%;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  span {
    font-size: 12px;
    color: var(--alert-1);
  }

  button {
    align-self: center;
  }

  .delete {
    display: flex;
    background-color: var(--alert-1);
    width: 100%;
    transition: 0.7 ease;
  }
`;
