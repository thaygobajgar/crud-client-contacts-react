import "styled-components";
import styled from "styled-components";

export const StyledContactCard = styled.li`
  width: 44%;
  height: 80px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey-0);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;

  button {
    width: 44%;
    height: 80px;
    background-color: var(--grey-0);
  }

  .hidden-info {
    display: none;
  }

  @media (min-width: 600px) {
    height: 140px;
    width: 30%;
  }

  @media (min-width: 900px) {
    .hidden-info {
      display: initial;
    }
  }
`;
