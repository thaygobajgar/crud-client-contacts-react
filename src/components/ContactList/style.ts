import "styled-components";
import styled from "styled-components";

export const StyledContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  width: 90%;
  max-width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  padding: 6px;
  margin-top: 10px;
  & > li {
    width: 44%;

    & > button {
      background-color: var(--brand-3);
      width: 100%;
      height: 100%;
      min-height: 80px;
    }

    @media (min-width: 600px) {
      width: 30%;
    }
  }
  & > button {
    width: 44%;
    height: 80px;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 50px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (min-width: 600px) {
    justify-content: initial;
    flex-wrap: wrap;
  }
`;
