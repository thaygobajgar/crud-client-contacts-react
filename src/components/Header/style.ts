import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--brand-1);
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;
    padding-bottom: 1rem;
  }

  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--brand-3);
    padding: 12px 16px;
    border-radius: 12px;
    position: relative;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    .userToast {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 78px;
      left: 0;
      button {
        height: 28px;
        width: 72px;
        background-color: var(--brand-1);
      }
    }

    .logout {
      border: 1px solid var(--brand-1);
      background: var(--alert-2);
      padding: 0.3rem;
      border-radius: 12px;
      color: var(--translucid);
      cursor: pointer;
      &:hover {
        background: var(--alert-1);
      }
    }
    img {
      border-radius: 50px;
      border: 1px solid var(--translucid);
      width: 50px;
      height: 50px;
      object-fit: cover;

      font-size: 8px;
    }
  }

  @media (max-width: 599px) {
    .container {
      flex-direction: column-reverse;
    }
    .userMenu {
      width: 100%;
      justify-content: center;
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
    input {
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
