import "styled-components";
import styled from "styled-components";

export const StyledContactCard = styled.li`
  width: 44%;
  height: 80px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  button {
    width: 44%;
    height: 80px;
    background-color: black;
  }

  @media (max-width: 600px) {
    .hidden-info {
      display: none;
    }
  }
`;
