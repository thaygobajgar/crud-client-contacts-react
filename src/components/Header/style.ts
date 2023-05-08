import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--brand-1);
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .container {
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }
  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 130px;
    background-color: var(--brand-3);
    padding: 12px 16px;
    border-radius: 12px;
    position: relative;
    cursor: pointer;

    .userToast {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 63px;

      background-color: var(--brand-1);
      right: 0;
      animation: toast 1s;
      cursor: pointer;
      & > span {
        height: 42px;
        width: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        border: 1px solid var(--white-fixed);

        &:hover {
          background-color: var(--brand-3);
          border: 1px solid var(--white-fixed);
        }
      }

      @keyframes toast {
        0% {
          top: -100px;
        }
        50% {
          top: -50px;
        }
        100% {
          top: 0;
        }
      }
    }

    .logout {
      cursor: pointer;
    }
    & > img {
      border-radius: 50px;
      border: 1px solid var(--translucid);
      width: 50px;
      height: 50px;
      object-fit: cover;

      font-size: 8px;
    }
  }
`;

export const StyledHeaderForm = styled.form`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 1rem;
    background: var(--brand-1);
    border-radius: 10px;
    gap: 6px;
    & > input {
      font-size: 16px;
      color: var(--grey-0);
      background-color: transparent;
      max-width: 300px;
      border-radius: 10px;
      height: 32px;

      &::placeholder {
        color: var(--translucid);
      }
    }
  }
`;
