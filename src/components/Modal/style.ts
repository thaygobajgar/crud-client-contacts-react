import styled from "styled-components";

export const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 10;
`;
export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  max-width: 90%;
  min-height: 380px;

  background-color: white;
  border: 1px solid black;
  border-radius: 14px;

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;
    border-radius: 14px 14px 0 0;
    position: relative;
    padding: 12px;

    background-color: var(--brand-1);

    h3 {
      color: var(--grey-0);
      font-weight: bold;
    }

    button {
      border-radius: 50%;

      color: var(--grey-0);
      background-color: var(--brand-1);

      font-size: 1.5rem;

      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: var(--brand-3);
      }
    }
  }

  .modal-children {
    display: flex;
    justify-content: center;

    padding: 25px 2.5rem;
  }
`;
